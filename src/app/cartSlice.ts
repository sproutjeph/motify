import { createSlice } from '@reduxjs/toolkit';
import { ICartState } from '../types';
import data from '../data';

let { products } = data;
const initialState: ICartState = {
  allProducts: [...products],
  allCategories: [],
  cart: [],
  totalPrice: 0,
  nuOfItemsInCart: 0,
  isSidebarOpen: false,
  isLoading: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getAllProducts(state, action) {
      // state.allProducts = action.payload || [];
    },
    getCartData(state, action) {
      state.cart = action.payload || [];
    },

    getCategories(state) {
      const categories = products.reduce(
        (acc, item) => {
          if (!acc.includes(item.category)) acc.push(item.category);
          return acc;
        },
        ['all']
      );

      state.allCategories = categories;
    },
    filterProducts(state, action) {
      state.allProducts = products.filter(
        (item) => item.category === action.payload
      );
      if (action.payload === 'all') {
        state.allProducts = products;
      }
    },
    addToCart(state, action) {
      const existing = state.cart.find((item) => item.id === action.payload);
      if (existing) {
        const inCart = state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount + 1 }
            : item
        );

        state.cart = inCart;
      } else {
        const cartItem = state.allProducts.find(
          (product) => product.id === action.payload
        );
        state.cart.push(cartItem);
      }
    },
    getCartTotal(state) {
      const total = state.cart.reduce((acc, item) => {
        return (acc = item.amount + acc);
      }, 0);
      state.nuOfItemsInCart = total;
    },
    increaseAmount(state, action) {
      const items = state.cart.map((prod) =>
        prod.id === action.payload ? { ...prod, amount: prod.amount + 1 } : prod
      );
      state.cart = items;
    },
    decreaseAmount(state, action) {
      const items = state.cart
        .map((prod) =>
          prod.id === action.payload
            ? { ...prod, amount: prod.amount - 1 }
            : prod
        )
        .filter((item) => item.amount !== 0);

      state.cart = items;
    },
    getTotalPrice(state) {
      const totalPrice = state.cart.reduce((acc, item) => {
        return (acc = item.amount * item.price + acc);
      }, 0);

      state.totalPrice = totalPrice;
    },
    openSidebar(state) {
      state.isSidebarOpen = true;
    },
    closeSidebar(state) {
      state.isSidebarOpen = false;
    },
  },
});

export const {
  getAllProducts,
  getCategories,
  filterProducts,
  addToCart,
  getCartTotal,
  decreaseAmount,
  increaseAmount,
  getTotalPrice,
  getCartData,
  closeSidebar,
  openSidebar,
} = cartSlice.actions;

export default cartSlice.reducer;
