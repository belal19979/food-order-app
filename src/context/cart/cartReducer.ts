import { LocalCartItem } from "@/types/cart";

export type CartAction =
  | { type: "add"; item: LocalCartItem }
  | { type: "update"; slug: string; quantity: number }
  | { type: "remove"; slug: string }
  | { type: "replace"; items: LocalCartItem[] }
  | { type: "clear" };

export function cartReducer(
  state: LocalCartItem[],
  action: CartAction
): LocalCartItem[] {
  switch (action.type) {
    case "add": {
      const exists = state.find((i) => i.food.slug === action.item.food.slug);
      if (exists) {
        return state.map((i) =>
          i.food.slug === action.item.food.slug
            ? { ...i, quantity: i.quantity + action.item.quantity }
            : i
        );
      }
      return [...state, action.item];
    }
    case "update": {
      if (action.quantity <= 0) {
        return state.filter((i) => i.food.slug !== action.slug);
      }
      return state.map((i) =>
        i.food.slug === action.slug ? { ...i, quantity: action.quantity } : i
      );
    }
    case "remove": {
      return state.filter((i) => i.food.slug !== action.slug);
    }
    case "replace": {
      return action.items;
    }
    case "clear": {
      return [];
    }
    default:
      return state;
  }
}
