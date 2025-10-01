import { describe, it, expect, beforeEach } from 'vitest';
import request from 'supertest';
import { makeApp } from '../../app';
import { createOrder, getOrderById, cancelOrder, clearOrders } from '../../services/order.service';

describe('Order Service - Test Unitario', () => {
  beforeEach(() => {
    clearOrders();
  });

  describe('createOrder', () => {
    it('Deberia crear una orden con datos validos', () => {
      const orderData = {
        items: [
          { size: 'M' as const, toppings: ['queso', 'pepperoni'] }
        ],
        address: '123 Calle, Ciudad'
      };

      const order = createOrder(orderData);

      expect(order).toHaveProperty('id');
      expect(order.items).toHaveLength(1);
      expect(order.status).toBe('pending');
      expect(order.address).toBe('123 Calle, Ciudad');
    });

    it('debe calcular el precio para tamaño S', () => {
      const orderData = {
        items: [
          { size: 'S' as const, toppings: ['queso'] }
        ],
        address: '123 Calle, Ciudad'
      };

      const order = createOrder(orderData);

      expect(order.totalPrice).toBe(12); // 10 (S) + 1*2 (topping)
    });

    it('Deberia calcular el precio para tamaño M', () => {
      const orderData = {
        items: [
          { size: 'M' as const, toppings: ['queso', 'pepperoni'] }
        ],
        address: '123 Calle, Ciudad'
      };

      const order = createOrder(orderData);

      expect(order.totalPrice).toBe(19); // 15 (M) + 2*2 (toppings)
    });

    it('Debe calcular el precio por tamaño L', () => {
      const orderData = {
        items: [
          { size: 'L' as const, toppings: ['queso', 'pepperoni', 'anana'] }
        ],
        address: '123 Calle, Ciudad'
      };

      const order = createOrder(orderData);

      expect(order.totalPrice).toBe(26); // 20 (L) + 3*2 (toppings)
    });
  });

  describe('deberia obtener la orden por ID', () => {
    it('should return an order by id', () => {
      const orderData = {
        items: [{ size: 'M' as const, toppings: ['queso'] }],
        address: '123 Calle, Ciudad'
      };

      const createdOrder = createOrder(orderData);
      const foundOrder = getOrderById(createdOrder.id);

      expect(foundOrder).toBeDefined();
      expect(foundOrder?.id).toBe(createdOrder.id);
    });

    it('deberia devolver undefined si la orden no existe', () => {
      const order = getOrderById('nonexistent');
      expect(order).toBeUndefined();
    });
  });

  describe('cancelOrder', () => {
    it('deberia cancelar una entrega pendiente', () => {
      const orderData = {
        items: [{ size: 'M' as const, toppings: ['queso'] }],
        address: '123 Calle, Ciudad'
      };

      const order = createOrder(orderData);
      const cancelledOrder = cancelOrder(order.id);

      expect(cancelledOrder.status).toBe('cancelled');
    });

    it('deberia tirar un error al cancelar una orden ya entregada', () => {
      const orderData = {
        items: [{ size: 'M' as const, toppings: ['queso'] }],
        address: '123 Calle, Ciudad'
      };

      const order = createOrder(orderData);
      order.status = 'delivered';

      expect(() => cancelOrder(order.id)).toThrow('Cannot cancel delivered order');
    });

    it('deberia tirar un error cuando no encuentra la orden', () => {
      expect(() => cancelOrder('nonexistent')).toThrow('Order not found');
    });
  });
});