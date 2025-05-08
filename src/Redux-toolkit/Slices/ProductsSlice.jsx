// This file contains the Redux slice for managing product data for display.
// It includes an async thunk for fetching products from an API and reducers for handling sorting,
// pagination, and searching. It uses Redux Toolkit's createSlice and createAsyncThunk.
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('../../../public/img/Products/products.json');
            return response.data;
        } catch (error) {
            console.log(error.response.data);
            return thunkAPI.rejectWithValue(error.response?.data || error.message); // Return error for handling in rejected case
        }
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [], // All products
        filteredItems: [], // Filtered products based on search
        status: 'idle',
        searchTerm: '',
        error: null,
    },
    reducers: {
        searchProducts: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            state.searchTerm = searchTerm;
            state.filteredItems = state.items.filter((item) =>
                item.name.toLowerCase().includes(searchTerm) ||
                item.description.toLowerCase().includes(searchTerm)
            );
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
                state.filteredItems = action.payload; // Initialize filteredItems with all products
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { searchProducts, setProducts } = productsSlice.actions;
export default productsSlice.reducer;