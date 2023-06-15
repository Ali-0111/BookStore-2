import { createSlice } from '@reduxjs/toolkit';
import add_API_helper from '@/helpers/add_API_helper.js';
import removeBookHelper from '@/helpers/removeBookHelper.js';

import { getBooks_API, addBook_API, removeBook_API } from '@/apiServices/apiFunc';
const initialState = {
  bookCollection: {},
  isLoading: false,
  message: ''
};

const bookSlice = createSlice(
  {
    name:'booksState',
    initialState,
    extraReducers: (builder) => {
      builder.addCase(getBooks_API.fulfilled,(state, {payload}) => {
        return {...state, bookCollection: payload}
      });

      builder.addCase(addBook_API.fulfilled,(state, {payload}) => {
        return (add_API_helper(state, payload));
      });

      builder.addCase(removeBook_API.fulfilled,(state, {payload}) => {
        return (removeBookHelper(state, payload));
      });
    },
  }
);

export const {addNewBook, removeBook} = bookSlice.actions;
export default bookSlice;