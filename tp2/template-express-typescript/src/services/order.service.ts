import { Order, OrderItem } from '../models/order.model';

const orders: Order[] = [];

export function createOrder(data: { items: OrderItem[]; address: string }): Order {
  const totalPrice = calculatePrice(data.items);

  const order: Order = {
    id: generateId(),
    items: data.items,
    address: data.address,
    status: 'pending',
    totalPrice,
    createdAt: new Date()
  };

  orders.push(order);
  return order;
}

export function getOrderById(id: string): Order | undefined {
  return orders.find(order => order.id === id);
}

export function cancelOrder(id: string): Order {
  const order = orders.find(o => o.id === id);
  
  if (!order) {
    throw new Error('Order not found');
  }

  if (order.status === 'delivered') {
    throw new Error('Cannot cancel delivered order');
  }

  order.status = 'cancelled';
  return order;
}

export function getOrdersByStatus(status?: string): Order[] {
  if (!status) {
    return orders;
  }
  return orders.filter(order => order.status === status);
}

function calculatePrice(items: OrderItem[]): number {
  const sizePrices = { S: 10, M: 15, L: 20 };
  const toppingPrice = 2;

  return items.reduce((total, item) => {
    const basePrice = sizePrices[item.size];
    const toppingsPrice = item.toppings.length * toppingPrice;
    return total + basePrice + toppingsPrice;
  }, 0);
}

function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

// Helper para tests
export function clearOrders(): void {
  orders.length = 0;
}