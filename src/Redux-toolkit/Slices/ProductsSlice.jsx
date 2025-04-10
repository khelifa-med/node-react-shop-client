// This file contains the Redux slice for managing product data.
// It includes an async thunk for fetching products from an API and reducers for handling the state.
// It uses Redux Toolkit's createSlice and createAsyncThunk for easier state management.
// Description: This file contains the Redux slice for managing product data in a React application.
// It includes an async thunk for fetching products from an API and reducers for handling the state.
// It uses Redux Toolkit's createSlice and createAsyncThunk for easier state management.
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/api/products');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers: {
        // Add your reducers here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default productsSlice.reducer;