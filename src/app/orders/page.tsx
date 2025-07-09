import { OrdersShell } from "@/components/OrdersShell/OrdersShell";
import { getOrdersForUser } from "@/lib/server/orders";
import { serializeOrder } from "@/lib/serializers";

export default async function OrdersPage() {
  const orders = await getOrdersForUser("cmcrdgkiv0000nm572bp2wwbw");
  const ordersForUi = orders.map((order) => serializeOrder(order));
  console.log("ordersForUi", ordersForUi);
  return <OrdersShell orders={ordersForUi} />;
}
