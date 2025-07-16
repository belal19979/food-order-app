import { LocalCartItem, ServerCartItem } from "@/types/cart";

export async function fetchCard() {
  try {
    const res = await fetch("/api/cart");
    if (!res.ok) throw new Error("Failed to load cart");
    const { items: serverItems }: { items: ServerCartItem[] } =
      await res.json();
    const localItems: LocalCartItem[] = serverItems.map(
      ({ food, quantity }) => ({
        food: { ...food, price: Number(food.price) },
        quantity,
      })
    );
    return localItems;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function upsertCart(foodId: string, quantity: number) {
  console.log("sent qty", quantity);
  try {
    await fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        foodId,
        quantity,
      }),
    });
  } catch (err) {
    console.error("Failed to sync addToCart:", err);
  }
}

export async function deleteCart(foodId?: string) {
  const url = "/api/cart";
  const opts: RequestInit = foodId
    ? {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ foodId }),
      }
    : { method: "DELETE" };
  return fetch(url, opts).catch((err) => {
    console.error("Cart delete failed:", err);
  });
}
