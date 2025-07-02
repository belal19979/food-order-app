import { FormValues } from "./form";

export type OrderItem = {
  id: string;
  foodId: string;
  orderId: string;
  price: number;
  quantity: number;
  food: { name: string };
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

  items: OrderItem[];
};

// The minimal shape the client must send when creating a new order.

export type CreateOrderItem = Pick<OrderItem, "slug" | "quantity">;

export type CreateOrderPayload = {
  customer: FormValues;
  items: CreateOrderItem[];
};
