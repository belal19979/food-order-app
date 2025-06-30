import { FormValues } from "./form";

export type OrderItem = {
  slug: string;
  name: string;
  price: number;
  quantity: number;
};

export type Order = {
  id: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  items: OrderItem[];
  subtotal: number;
  deliveryFee: number;
  tax: number;
  total: number;
};

// The minimal shape the client must send when creating a new order.

export type CreateOrderItem = Pick<OrderItem, "slug" | "quantity">;

export type CreateOrderPayload = {
  customer: FormValues;
  items: CreateOrderItem[];
};
