import { useState } from "react";
import { CartContext, CartItem } from "./context";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = () => {
    console.log("addToCart");
  };
  const updateQuantity = () => {
    console.log("updateQuantity");
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
