import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [], // Array to store wishlist items
};

export const WishlistSlice = createSlice({
    name: "WishlistSlice",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const findProduct = state.items.find((product) => product.id === action.payload.id);
            if (!findProduct) {
                state.items.push(action.payload);
            }
        },
        removeFromWishlist: (state, action) => {
            state.items = state.items.filter((product) => product.id !== action.payload.id);
        },
        clearWishlist: (state) => {
            state.items = [];
        },
    },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = WishlistSlice.actions;

export default WishlistSlice.reducer;