import { createSlice } from '@reduxjs/toolkit';

import { fetchCategories } from './categoriesOperations';

const pending = state => {
  state.categories.isLoading = true;
};
const rejected = (state, action) => {
  state.categories.isLoading = false;
  state.categories.error = action.payload;
};

const initialState = {
  categories: {
    items: {},
    isLoading: false,
    error: null,
  },
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.categories.isLoading = false;
        state.categories.error = null;
        state.categories.items = payload.data.result;
      })
      .addCase(fetchCategories.pending, pending)
      .addCase(fetchCategories.rejected, rejected);
  },
});

export default categoriesSlice.reducer;
