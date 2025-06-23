export type CartItem = { slug: string; quantity: number };

export interface CartContextType {
  cart: CartItem[];
  addToCart: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  removeFromCart: (slug: string) => void;
}
