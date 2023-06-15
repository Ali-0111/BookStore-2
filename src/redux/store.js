import { configureStore } from '@reduxjs/toolkit';
import categorySlice from '@/redux/categories/categorySlice.js';

const store = configureStore({
  reducer: {
    categoryState: categorySlice.reducer
  }
});

export default store;