export type OrderItem = {
  id: string;
  foodId: string;
  orderId: string;
  price: number;
  quantity: number;
  food: { name: string; image: string; slug: string };
};

export type Order = {
  id: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  deliveryAddress: string;
  deliveryNote: string;

  subtotal: number;
  deliveryFee: number;
  tax: number;
  total: number;

  createdAt?: string;
  items: OrderItem[];
};

// The minimal shape the client must send when creating a new order.

export interface CreateOrderItem {
  foodId: string;
  quantity: number;
}
export type CreateOrderPayload = {
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  deliveryAddress: string;
  deliveryNote?: string;
  items: CreateOrderItem[];
};
