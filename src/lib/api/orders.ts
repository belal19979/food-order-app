import type { CreateOrderPayload } from "@/types/order";

export async function createOrder(payload: CreateOrderPayload) {
  const res = await fetch("/api/orders", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
