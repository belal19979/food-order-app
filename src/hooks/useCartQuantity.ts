import { useCallback, useMemo, useEffect } from "react";
import debounce from "lodash.debounce";

import { useCart } from "@/context";
import { CartItem } from "@/types/cart";

export const useCartQuantity = (slug: string) => {
  const { cart, updateQuantity, addToCart } = useCart();

  const item: CartItem | undefined = cart.find((item) => item.slug === slug);
  const quantity = item?.quantity ?? 0;

  const changeQuantity = useCallback(
    (delta: number) => {
      const newQty = quantity + delta;
      if (newQty <= 0) {
        updateQuantity(slug, 0);
      } else if (!item && delta > 0) {
        addToCart(slug);
      } else {
        updateQuantity(slug, newQty);
      }
    },
    [quantity, updateQuantity, addToCart, slug, item]
  );

  const debouncedChange = useMemo(
    () => debounce(changeQuantity, 100),
    [changeQuantity]
  );

  //Clean up the timer
  useEffect(() => {
    return () => {
      debouncedChange.cancel();
    };
  }, [debouncedChange]);

  return { quantity, changeQuantity };
};
