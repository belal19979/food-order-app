import { OrdersShell } from "@/components/Orders/OrdersShell";
import { getOrdersForUser } from "@/lib/server/orders";
import { getCurrentUser } from "@/lib/server/auth";
import { serializeOrder } from "@/lib/serializers";
import { redirect } from "next/navigation";

export default async function OrdersPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const orders = await getOrdersForUser(user.id);
  const ordersForUi = orders.map((order) => serializeOrder(order));

  return <OrdersShell orders={ordersForUi} />;
}
