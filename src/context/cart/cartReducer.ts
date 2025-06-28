import { CartItem } from "@/types/cart";

export type CartAction =
  | { type: "add"; item: CartItem }
  | { type: "update"; slug: string; quantity: number }
  | { type: "remove"; slug: string };

export function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "add": {
      const exists = state.find((i) => i.slug === action.item.slug);
      if (exists) {
        return state.map((i) =>
          i.slug === action.item.slug
            ? { ...i, quantity: i.quantity + action.item.quantity }
            : i
        );
      }
      return [...state, action.item];
    }
    case "update": {
      if (action.quantity <= 0) {
        state.filter((i) => i.slug !== action.slug);
      }
      return state.map((i) =>
        i.slug === action.slug ? { ...i, quantity: action.quantity } : i
      );
    }
    case "remove": {
      return state.filter((i) => i.slug !== action.slug);
    }
    default:
      return state;
  }
}
