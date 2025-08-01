import { OrderDetailsPage } from "@/components/account/Orders/orderDetails/OrderDetailsPage";
import { getCurrentUser } from "@/lib/server/auth";
import { getOrderForUser } from "@/lib/server/orders";
import { redirect } from "next/navigation";
import { serializeOrder } from "@/lib/serializers";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  const order = await getOrderForUser(id, user.id);
  if (!order) redirect("/account/orders");
  const orderForUi = serializeOrder(order);
  return <OrderDetailsPage order={orderForUi} />;
}
