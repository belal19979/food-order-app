"use client";

import {
  createContext,
  useReducer,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { useLocalStorageState } from "../useLocalStorage";
import { cartReducer } from "./cartReducer";
import { CartContextType, CartItem } from "@/types/cart";
import { FoodItem } from "@/types/food";

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({
  foodItems,
  children,
}: {
  foodItems: FoodItem[];
  children: React.ReactNode;
}) {
  const [storedCart, setStoredCart] = useLocalStorageState<CartItem[]>(
    "cart",
    []
  );
  const [cart, dispatch] = useReducer(cartReducer, storedCart);

  // Build a slug → FoodItem map for O(1) lookups
  const foodItemsBySlug = useMemo(() => {
    const m: Record<string, FoodItem> = {};
    foodItems.forEach((i) => (m[i.slug] = i));
    return m;
  }, [foodItems]);

  useEffect(() => {
    setStoredCart(cart);
  }, [cart, setStoredCart]);

  const addToCart = useCallback(
    (slug: string) => {
      const foodItem = foodItemsBySlug[slug];
      if (!foodItem) {
        throw new Error(`CartProvider: tried to add unknown slug "${slug}"`);
      }
      const newItem: CartItem = { ...foodItem, quantity: 1 };
      dispatch({ type: "add", item: newItem });
    },
    [dispatch, foodItemsBySlug]
  );

  const updateQuantity = (slug: string, quantity: number) =>
    dispatch({ type: "update", slug, quantity });

  const removeFromCart = (slug: string) => dispatch({ type: "remove", slug });
  const clearCart = () => dispatch({ type: "clear" });

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
