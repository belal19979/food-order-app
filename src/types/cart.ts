import { FoodItem } from "./food";
export type CartItem = Pick<
  FoodItem,
  "name" | "category" | "description" | "image" | "price" | "slug"
> & {
  quantity: number;
};

export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  removeFromCart: (slug: string) => void;
}
