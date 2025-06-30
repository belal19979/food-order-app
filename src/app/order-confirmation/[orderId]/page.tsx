import { OrderConfirmation } from "@/components";
import { Order } from "@/types/order";
export default async function page(props: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await props.params;

  const order: Order = {
    id: orderId,
    customerName: "Jane Smith",
    customerPhone: "012‐345‐6789",
    customerEmail: "jane@example.com",
    items: [
      {
        slug: "margherita",
        name: "Margherita Pizza",
        price: 12.5,
        quantity: 2,
      },
      { slug: "caesar‐salad", name: "Caesar Salad", price: 8.0, quantity: 1 },
    ],
    subtotal: 12.5 * 2 + 8.0 * 1,
    deliveryFee: 5.0,
    tax: 2.64,
    total: 33.0 + 5.0 + 2.64,
  };

  return <OrderConfirmation order={order} />;
}
