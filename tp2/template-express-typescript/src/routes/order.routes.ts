import { Router, Request, Response } from 'express';
import { z, ZodError } from 'zod';
import { createOrder, getOrderById, cancelOrder, getOrdersByStatus } from '../services/order.service';

const router = Router();

// Schema de validación con Zod
const orderItemSchema = z.object({
  size: z.enum(['S', 'M', 'L']),
  toppings: z.array(z.string()).max(5, 'Maximum 5 toppings allowed')
});

const createOrderSchema = z.object({
  items: z.array(orderItemSchema).min(1, 'Items cannot be empty'),
  address: z.string().min(10, 'Address must be at least 10 characters')
});

// POST /orders
router.post('/', (req: Request, res: Response) => {
  try {
    const validatedData = createOrderSchema.parse(req.body);
    const order = createOrder(validatedData);
    res.status(201).json(order);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(422).json({ 
        error: 'Validation error', 
        details: error.issues
      });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /orders/:id
router.get('/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({ error: 'ID is required' });
  }

  const order = getOrderById(id);
  
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }
  
  res.json(order);
});

// POST /orders/:id/cancel
router.post('/:id/cancel', (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }

    const order = cancelOrder(id);
    res.json(order);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === 'Order not found') {
        return res.status(404).json({ error: error.message });
      }
      if (error.message === 'Cannot cancel delivered order') {
        return res.status(409).json({ error: error.message });
      }
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /orders?status=pending
router.get('/', (req: Request, res: Response) => {
  const status = req.query.status as string | undefined;
  const orders = getOrdersByStatus(status);
  res.json(orders);
});

export default router;