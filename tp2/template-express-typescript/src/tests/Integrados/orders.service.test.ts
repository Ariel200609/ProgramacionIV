import { describe, it, expect, beforeEach } from 'vitest';
import request from 'supertest';
import { makeApp } from '../../app';
import { clearOrders, getOrderById } from '../../services/order.service';

describe('Orders API', () => {
  const app = makeApp();

  beforeEach(() => {
    clearOrders();
  });

  describe('POST /orders', () => {
    it('deberia crear una orden y retornar 201', async () => {
      const response = await request(app)
        .post('/orders')
        .send({
          items: [
            { size: 'M', toppings: ['queso', 'pepperoni'] }
          ],
          address: '123 Calle, Ciudad'
        });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.status).toBe('pending');
      expect(response.body.totalPrice).toBe(19); // 15 (M) + 2*2 (toppings)
    });

    it('debria retorna 422 si el item esta vacio', async () => {
      const response = await request(app)
        .post('/orders')
        .send({
          items: [],
          address: '123 Calle'
        });

      expect(response.status).toBe(422);
      expect(response.body).toHaveProperty('error');
    });

    it('deberia retorna 422 si la ubicacion es demasiado corta', async () => {
      const response = await request(app)
        .post('/orders')
        .send({
          items: [{ size: 'M', toppings: ['queso'] }],
          address: 'Short'
        });

      expect(response.status).toBe(422);
    });

    it('debria retorna 422 si tiene mas de 5 toppings', async () => {
      const response = await request(app)
        .post('/orders')
        .send({
          items: [{
            size: 'L',
            toppings: ['queso', 'pepperoni', 'anana', 'aceitunas', 'jamon', 'panceta']
          }],
          address: '123 Calle, Ciudad'
        });

      expect(response.status).toBe(422);
    });
  });

  describe('GET /orders/:id', () => {
    it('deberia devolver una orden por id', async () => {
      const createResponse = await request(app)
        .post('/orders')
        .send({
          items: [{ size: 'M', toppings: ['queso'] }],
          address: '123 Calle, Ciudad'
        });

      const orderId = createResponse.body.id;

      const response = await request(app).get(`/orders/${orderId}`);

      expect(response.status).toBe(200);
      expect(response.body.id).toBe(orderId);
    });

    it('retorna 404 si no encuentra orden', async () => {
      const response = await request(app).get('/orders/nonexistent');

      expect(response.status).toBe(404);
    });
  });

  describe('POST /orders/:id/cancel', () => {
    it('Deberia cancelar la orden', async () => {
      const createResponse = await request(app)
        .post('/orders')
        .send({
          items: [{ size: 'M', toppings: ['queso'] }],
          address: '123 Calle, Ciudad'
        });

      const orderId = createResponse.body.id;

      const response = await request(app).post(`/orders/${orderId}/cancel`);

      expect(response.status).toBe(200);
      expect(response.body.status).toBe('cancelled');
    });

    it('debria retornar 409 si se intenta cancelar una orden que ya se entrego', async () => {
      const createResponse = await request(app)
        .post('/orders')
        .send({
          items: [{ size: 'M', toppings: ['queso'] }],
          address: '123 Calle, Ciudad'
        });

      const orderId = createResponse.body.id;

      // Modificar el estado directamente para simular una orden entregada
      const order = getOrderById(orderId);
      if (order) {
        order.status = 'delivered';
      }

      const response = await request(app).post(`/orders/${orderId}/cancel`);

      expect(response.status).toBe(409);
    });
  });

  describe('GET /orders', () => {
    it('deberia devolver todas las ordenes', async () => {
      await request(app).post('/orders').send({
        items: [{ size: 'M', toppings: ['queso'] }],
        address: '123 Calle, Ciudad'
      });

      const response = await request(app).get('/orders');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body).toHaveLength(1);
    });

    it('debria filtrar ordenes por estado', async () => {
      await request(app).post('/orders').send({
        items: [{ size: 'M', toppings: ['queso'] }],
        address: '123 Calle, Ciudad'
      });

      const response = await request(app).get('/orders?status=pending');

      expect(response.status).toBe(200);
      expect(response.body.every((o: any) => o.status === 'pending')).toBe(true);
    });
  });
});