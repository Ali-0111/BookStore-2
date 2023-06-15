import { configureStore } from '@reduxjs/toolkit';
import categorySlice from '@/redux/categories/categorySlice.js';
import bookSlice from '@/redux/books/bookSlice.js';

const store = configureStore({
  reducer: {
    category_state: categorySlice.reducer,
    books_state: bookSlice.reducer
  }
});

export default store;