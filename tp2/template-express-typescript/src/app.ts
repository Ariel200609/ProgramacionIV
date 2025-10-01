import express, { Application } from 'express';
import ordersRouter from './routes/order.routes';

export function makeApp(): Application {
  const app = express();
  
  app.use(express.json());
  
  // Health check
  app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
  });
  
  // Routes
  app.use('/orders', ordersRouter);
  
  app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
  });
  
  return app;
}