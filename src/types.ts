export interface IProduct {
  id: number;
  title: string;
  slug: string;
  category: string;
  price: number;
  img: any;
  amount: number;
  brand: string;
  rating: number;
  numReviews: number;
  countInStock: number;
  description: string;
}

export interface ICartState {
  allProducts: IProduct[];
  allCategories: string[];
  cart: any[];
  totalPrice: number;
  nuOfItemsInCart: number;
  isSidebarOpen: boolean;
  isLoading: boolean;
}
