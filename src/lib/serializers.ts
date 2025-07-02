/**
 * Transforms a raw Prisma Order-with-items payload (with Decimal and Date types)
 * into a plain-JS object matching  UIOrder type
 * @param raw  A Prisma OrderGetPayload including nested items & food.name
 * @returns    A UIOrder ready for passing into React components
 */

import type { Prisma } from "@/generated/prisma";
import { Order as UIOrder, OrderItem as UIOrderItem } from "@/types/order";

type RawOrderWithItems = Prisma.OrderGetPayload<{
  include: {
    items: {
      include: {
        food: { select: { name: true } };
      };
    };
  };
}>;

export function serializeOrder(raw: RawOrderWithItems): UIOrder {
  return {
    id: raw.id,
    customerName: raw.customerName,
    customerPhone: raw.customerPhone,
    customerEmail: raw.customerEmail ?? "",
    deliveryAddress: raw.deliveryAddress,
    deliveryNote: raw.deliveryNote ?? "",

    // Convert each Decimal → number
    subtotal: raw.subtotal.toNumber(),
    deliveryFee: raw.deliveryFee.toNumber(),
    tax: raw.tax.toNumber(),
    total: raw.total.toNumber(),

    items: raw.items.map(
      (item): UIOrderItem => ({
        id: item.id,
        orderId: item.orderId,
        foodId: item.foodId,
        quantity: item.quantity,
        price: item.price.toNumber(), // Convert  Decimal → number
        food: { name: item.food.name },
      })
    ),
  };
}
