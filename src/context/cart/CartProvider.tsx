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
import { DeleteCart, FetchCard, UpsertCart } from "./cartUtils";

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
      FetchCard()
        .then((localItems) => {
          dispatch({ type: "replace", items: localItems });
          setStoredCart(localItems);
        })
        .catch(console.error);
    }
  }, [user, authLoading, setStoredCart]);

  const addToCart = useCallback(
    (slug: string) => {
      const foodItem = foodItemsBySlug[slug];
      if (!foodItem) {
        throw new Error(`CartProvider: tried to add unknown slug "${slug}"`);
      }
      const newItem: LocalCartItem = { food: foodItem, quantity: 1 };
      dispatch({ type: "add", item: newItem });
      if (user) {
        UpsertCart(foodItem.id, 1);
      }
    },
    [dispatch, foodItemsBySlug, user]
  );

  const updateQuantity = (slug: string, quantity: number) => {
    dispatch({ type: "update", slug, quantity });

    if (user) {
      const id = foodItemsBySlug[slug].id;
      UpsertCart(id, quantity);
    }
  };

  const removeFromCart = async (slug: string) => {
    dispatch({ type: "remove", slug });
    if (user) {
      const id = foodItemsBySlug[slug].id;
      DeleteCart(id);
    }
  };
  const clearCart = async () => {
    dispatch({ type: "clear" });
    if (user) DeleteCart();
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
