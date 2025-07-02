import { OrderConfirmation } from "@/components";
import { prisma } from "@/lib/prisma";
import { serializeOrder } from "@/lib/serializers";

export default async function page(props: {
  params: Promise<{ orderId: string }>;
}) {
  const id = (await props.params).orderId;
  const order = await prisma.order.findUnique({
    where: { id },
    include: {
      items: { include: { food: { select: { name: true } } } },
    },
  });
  console.log("order", order);
  if (!order) {
    return <p>Order not found</p>;
  }
  console.log("order from be", order);
  const orderForUI = serializeOrder(order);
  console.log("orderForUI", orderForUI);

  return <OrderConfirmation order={orderForUI} />;
}
