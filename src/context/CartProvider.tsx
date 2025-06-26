"use client";

import { createContext, useReducer, useEffect } from "react";
import { useLocalStorageState } from "./useLocalStorage";
import { cartReducer } from "./cartReducer";
import { CartContextType, CartItem } from "@/types/cart";

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [storedCart, setStoredCart] = useLocalStorageState<CartItem[]>(
    "cart",
    []
  );
  const [cart, dispatch] = useReducer(cartReducer, storedCart);

  useEffect(() => {
    setStoredCart(cart);
  }, [cart, setStoredCart]);

  const addToCart = (item: CartItem) => dispatch({ type: "add", item });
  const updateQuantity = (slug: string, quantity: number) =>
    dispatch({ type: "update", slug, quantity });
  const removeFromCart = (slug: string) => dispatch({ type: "remove", slug });

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
