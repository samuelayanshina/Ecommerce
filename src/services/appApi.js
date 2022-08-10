import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080'}),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (user) => ({
                url: "/users/signup",
                method: "POST",
                body: user,
            }),
        }),

        login: builder.mutation({
            query: user => ({
                url: "/users/login",
                method: "POST",
                body: user,
            }),
        }),

        createProduct: builder.mutation({
            query: (product) => ({
                url: "/products",
                body: product,  
                method: "POST",
            }),
        }),

        addToCart: builder.mutation({
            query: (cartInfo) => ({
                url: "/products/add-to-cart",
                body: cartInfo,
                method: "POST",
            }),
        }),

        removeFromCart: builder.mutation({
            query: (body) => ({
                url: "/products/remove-from-cart",
                body,
                method: "DELETE",
            }),
        }),

        increaseCartProduct: builder.mutation({
            query: (body) => ({
                url: "/products/increase-cart",
                body,
                method: "POST",
            }),
        }),

        decreaseCartProduct: builder.mutation({
            query: (body) => ({
                url: "/products/decrease-cart",
                body,
                method: "POST",
            }),
        }),
    }),
});

export const { useSignupMutation, useLoginMutation, useCreateProductMutation, useAddToCartMutation, useRemoveFromCartMutation, useIncreaseCartProductMutation, useDecreaseCartProductMutation } = appApi;


export default appApi;