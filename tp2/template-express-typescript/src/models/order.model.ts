export interface OrderItem {
  size: 'S' | 'M' | 'L';
  toppings: string[];
}

export interface Order {
  id: string;
  items: OrderItem[];
  address: string;
  status: 'pending' | 'preparing' | 'delivered' | 'cancelled';
  totalPrice: number;
  createdAt: Date;
}