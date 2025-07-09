import { Prisma } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import type { CreateOrderInput } from "@/lib/schemas/order";

export function computeTotals(
  lines: Array<{ price: Prisma.Decimal; quantity: number }>
) {
  const deliveryFee = new Prisma.Decimal(3);
  const taxRate = new Prisma.Decimal(0.1);

  const subtotal = lines.reduce(
    (sum, { price, quantity }) => sum.plus(price.times(quantity)),
    new Prisma.Decimal(0)
  );

  const tax = subtotal.plus(deliveryFee).times(taxRate);
  const total = subtotal.plus(deliveryFee).plus(tax);

  return { subtotal, deliveryFee, tax, total };
}

export async function buildLineItems(
  payload: CreateOrderInput
): Promise<Array<{ foodId: string; quantity: number; price: Prisma.Decimal }>> {
  const orderItemsIds = payload.items.map((i) => i.foodId);
  const menuItems = await prisma.foodItem.findMany({
    where: { id: { in: orderItemsIds } },
    select: { id: true, price: true },
  });
  // Build line-items with exact price snapshots
  return payload.items.map((line) => {
    const menu = menuItems.find((m) => m.id === line.foodId);
    if (!menu) {
      throw new Error(`No menu item with id=${line.foodId}`);
    }
    return {
      foodId: line.foodId,
      quantity: line.quantity,
      price: menu.price,
    };
  });
}

export async function getOrdersForUser(userId: string) {
  return prisma.order.findMany({
    where: { userId },
    include: {
      items: {
        include: {
          food: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });
}
