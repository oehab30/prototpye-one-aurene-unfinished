export interface WishlistItemType {
  id: string;
  title: string;
  price: number;
  image: string;
}

export interface WishlistContextType {
  wishlistItems: WishlistItemType[];
  addToWishlist: (item: WishlistItemType) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  clearWishlist: () => void;
  wishlistCount: number;
}
