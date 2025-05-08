// File: src/Redux-toolkit/store.jsx
import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './Slices/ProductsSlice'; // Import the default reducer
import CartReducer from './Slices/CartSlice'
import WishlistReducer from './Slices/WishlistSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: CartReducer,
    wishlist: WishlistReducer,
  },
})