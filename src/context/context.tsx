import { createContext } from "react";

export type CartItem = {
  slug: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  removeFromCart: (slug: string) => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
