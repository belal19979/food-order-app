import { FoodItem } from "./food";

export type ServerCartItem = {
  id: string;
  userId: string;
  foodId: string;
  quantity: number;
  food: FoodItem;
};
export type LocalCartItem = {
  food: FoodItem;
  quantity: number;
};
export interface CartContextType {
  cart: LocalCartItem[];
  addToCart: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
}
