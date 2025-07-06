/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/context";
import { createOrder } from "@/lib/api/orders";
import type { FormValues } from "@/types/form";
import type { CreateOrderPayload } from "@/types/order";

export function useCheckout() {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // redirect if cart empty
  useEffect(() => {
    if (cart.length === 0 && !loading) router.replace("/menu");
  }, [cart, router, loading]);

  async function submit(data: FormValues) {
    setLoading(true);
    setError(null);

    const payload: CreateOrderPayload = {
      customerName: data.fullName,
      customerPhone: data.phone,
      customerEmail: data.email,
      deliveryAddress: data.address,
      deliveryNote: data.deliveryNote,
      items: cart.map(({ id, quantity }) => ({
        foodId: id,
        quantity,
      })),
    };

    try {
      const { id: orderId } = await createOrder(payload);
      clearCart();
      router.replace(`/order-confirmation/${orderId}`);
    } catch (e: any) {
      setError(e.message);
      setLoading(false);
    }
  }

  return { cart, loading, error, submit };
}
