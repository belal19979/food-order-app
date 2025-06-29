import { useMemo } from "react";
import { useCart } from "@/context";

interface CartSummaryValues {
  subtotal: number;
  tax: number;
  deliveryFee: number;
  total: number;
}

export const useCartSummary = ({
  deliveryFee = 10,
  taxRate = 0.1,
}: {
  deliveryFee?: number;
  taxRate?: number;
} = {}): CartSummaryValues => {
  const { cart } = useCart();
  const { subtotal, tax, total } = useMemo(() => {
    const subtotal = cart.reduce(
      (sum, { price, quantity }) => sum + price * quantity,
      0
    );
    const tax = subtotal * taxRate;
    const total = subtotal + (subtotal > 0 ? deliveryFee : 0) + tax;
    return { subtotal, tax, total };
  }, [cart, deliveryFee, taxRate]);

  return { subtotal, tax, deliveryFee, total };
};
