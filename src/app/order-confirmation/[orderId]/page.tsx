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
  if (!order) {
    return <p>Order not found</p>;
  }
  const orderForUI = serializeOrder(order);

  return <OrderConfirmation order={orderForUI} />;
}
