import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [], // Array to store cart items
    totalQuantity: 0,
    totalAmount: 0,
    shippingAddress: {
        name: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
    }, // Default empty shipping address
    paymentMethod: '', // Default empty payment method
    currentOrder: null, // Add this to store the final order details

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

        updateCartItemQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const productToUpdate = state.items.find((product) => product.id === id);

            if (productToUpdate) {
                // Update total amount and quantity
                const quantityDifference = quantity - productToUpdate.quantity;
                state.totalQuantity += quantityDifference;
                state.totalAmount += quantityDifference * productToUpdate.price;

                // Update the product's quantity and total price
                productToUpdate.quantity = quantity;
                productToUpdate.totalPrice = productToUpdate.price * quantity;
            }
        },

        // Save shipping address
        saveShippingAddress: (state, action) => {
            state.shippingAddress = action.payload;
        },

        // Save payment method
        savePaymentMethod: (state, action) => {
            state.paymentMethod = action.payload;
        },
    },
});

export const {
    addToCart,
    deleteFromCart,
    clearFromCart,
    updateCartItemQuantity,
    saveShippingAddress,
    savePaymentMethod,
} = CartSlice.actions;

export default CartSlice.reducer;