export interface CartItemType {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItemType[];
  addToCart: (item: CartItemType) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}
