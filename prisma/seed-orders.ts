// prisma/seed-orders.ts
import { prisma } from "@/lib/prisma";

async function main() {
  const [pizza, fries] = await prisma.foodItem.findMany({
    where: { slug: { in: ["margherita-pizza", "french-fries"] } },
    take: 2,
  });

  const pizzaQty = 2;
  const friesQty = 1;
  const delivery = 3.0;
  const subtotal = pizza.price * pizzaQty + fries.price * friesQty;
  const tax = (subtotal + delivery) * 0.1;
  const total = subtotal + delivery + tax;

  await prisma.order.create({
    data: {
      customerName: "Test User",
      customerPhone: "000-0000",
      deliveryAddress: "123 Demo St",
      deliveryNote: "Leave at door",

      subtotal,
      deliveryFee: delivery,
      tax,
      total,

      items: {
        create: [
          { foodId: pizza.id, quantity: pizzaQty, price: pizza.price },
          { foodId: fries.id, quantity: friesQty, price: fries.price },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
