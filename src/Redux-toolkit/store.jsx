// File: src/Redux-toolkit/store.jsx
import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './Slices/ProductsSlice'
import { CartSlice } from './Slices/CartSlice'

export const store = configureStore({
  reducer: {
    // products: productsSlice.reducer,
    cart: CartSlice.reducer
  },
})