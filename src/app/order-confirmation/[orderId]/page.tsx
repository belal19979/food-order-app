import { OrderConfirmation } from "@/components";
import { Order } from "@/types/order";
import { prisma } from "@/lib/prisma";

export default async function page(props: {
  params: Promise<{ orderId: string }>;
}) {
  // const { orderId } = await props.params;
  const id = "cmck1h0rf0000nm1y02csp8yw";
  const order = await prisma.order.findUnique({
    where: { id },
    include: {
      items: { include: { food: { select: { name: true, image: true } } } },
    },
  });

  if (!order) {
    return <p>Order not found</p>;
  }
  console.log("order from be", order);

  return <OrderConfirmation order={order} />;
}
