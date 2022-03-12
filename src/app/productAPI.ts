import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsAPI = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://motify-redux-default-rtdb.firebaseio.com',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<any[], void>({
      query: () => 'cart.json',
    }),
    getCartItems: builder.query<any[], void>({
      query: () => 'cartItem.json',
    }),

    sendCartData: builder.mutation({
      query: (cartData) => ({
        url: '/cartItem.json',
        method: 'POST',
        body: cartData,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useSendCartDataMutation,
  useGetCartItemsQuery,
} = productsAPI;
