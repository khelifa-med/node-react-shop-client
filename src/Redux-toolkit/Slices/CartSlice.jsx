import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [], // Array to store cart items
    totalQuantity: 0,
    totalAmount: 0,
};

export const CartSlice = createSlice({
    name: "CartSlice",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.items.find((product) => product.id === action.payload.id);

            if (findProduct) {
                findProduct.quantity += 1;
                findProduct.totalPrice += action.payload.price;
            } else {
                const productClone = { ...action.payload, quantity: 1, totalPrice: action.payload.price };
                state.items.push(productClone);
            }

            state.totalQuantity += 1;
            state.totalAmount += action.payload.price;
        },

        deleteFromCart: (state, action) => {
            const productToDelete = state.items.find((product) => product.id === action.payload.id);
            if (productToDelete) {
                state.totalQuantity -= productToDelete.quantity;
                state.totalAmount -= productToDelete.totalPrice;
            }

            state.items = state.items.filter((product) => product.id !== action.payload.id);
        },

        clearFromCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        },
    },
});

export const { addToCart, deleteFromCart, clearFromCart } = CartSlice.actions;

export default CartSlice.reducer;