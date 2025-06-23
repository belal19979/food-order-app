"useClient";
import { useState, useEffect, useRef } from "react";
import { CartItem } from "@/types/cart";
import { createContext } from "react";
import { CartContextType } from "@/types/cart";

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const hasLoaded = useRef(false);
  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart");
      if (raw) {
        setCart(JSON.parse(raw) as CartItem[]);
      }
    } catch (e) {
      console.error("Failed to parse cart from localStorage", e);
    }
    hasLoaded.current = true;
  }, []);

  useEffect(() => {
    if (!hasLoaded.current) return;
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to write cart to localStorage", e);
    }
  }, [cart]);

  const addToCart = (slug: string) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.slug === slug);
      if (exists) {
        return prev.map((item) =>
          item.slug === slug ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { slug, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (slug: string, quantity: number) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.slug === slug);
      if (quantity <= 0) {
        return prev.filter((item) => item.slug !== slug);
      }
      if (exists) {
        return prev.map((item) =>
          item.slug === slug ? { ...item, quantity } : item
        );
      }

      return [...prev, { slug, quantity }];
    });
  };

  const removeFromCart = () => {
    console.log("removeFromCart");
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
