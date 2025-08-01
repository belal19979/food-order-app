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
import { CartContextType, LocalCartItem } from "@/types/cart";
import { FoodItem } from "@/types/food";
import { useAuth } from "@/components";
import { deleteCart, fetchCard, upsertCart } from "./cartUtils";

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
  const { user, loading: authLoading } = useAuth();

  const [storedCart, setStoredCart] = useLocalStorageState<LocalCartItem[]>(
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
    if (!authLoading && user) {
      fetchCard()
        .then((localItems) => {
          dispatch({ type: "replace", items: localItems });
          setStoredCart(localItems);
        })
        .catch(console.error);
    }
  }, [user, authLoading, setStoredCart]);

  const addToCart = useCallback(
    (slug: string, quantity = 1) => {
      const foodItem = foodItemsBySlug[slug];
      if (!foodItem) {
        throw new Error(`CartProvider: tried to add unknown slug "${slug}"`);
      }
      const exists = cart.find((item) => item.food.slug === slug);
      if (exists) {
        const newQty = exists.quantity + quantity;

        dispatch({
          type: "update",
          slug,
          quantity: newQty,
        });
        if (user) upsertCart(foodItem.id, newQty);
      } else {
        dispatch({ type: "add", item: { food: foodItem, quantity } });
        if (user) upsertCart(foodItem.id, quantity);
      }
    },
    [dispatch, foodItemsBySlug, user, cart]
  );

  const updateQuantity = (slug: string, quantity: number) => {
    dispatch({ type: "update", slug, quantity });

    if (user) {
      const id = foodItemsBySlug[slug].id;
      upsertCart(id, quantity);
    }
  };

  const removeFromCart = async (slug: string) => {
    dispatch({ type: "remove", slug });
    if (user) {
      const id = foodItemsBySlug[slug].id;
      deleteCart(id);
    }
  };
  const clearCart = async () => {
    dispatch({ type: "clear" });
    if (user) deleteCart();
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
