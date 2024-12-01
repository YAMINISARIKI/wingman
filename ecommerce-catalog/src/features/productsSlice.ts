import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: Rating;
}

interface ProductsState {
  items: Product[];
  searchQuery: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: ProductsState = {
  items: [],
  searchQuery: '',
  status: 'idle',
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
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
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setSearchQuery } = productsSlice.actions;
export default productsSlice.reducer;
