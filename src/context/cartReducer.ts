import { CartItem } from "@/types/cart";

export type CartAction =
  | { type: "add"; slug: string }
  | { type: "update"; slug: string; quantity: number }
  | { type: "remove"; slug: string };

export function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "add": {
      const exists = state.find((i) => i.slug === action.slug);
      if (exists) {
        return state.map((i) =>
          i.slug === action.slug ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...state, { slug: action.slug, quantity: 1 }];
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
      return [];
    }
    default:
      return state;
  }
}
