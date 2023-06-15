import { createSlice } from '@reduxjs/toolkit';
import removeById from '@/helpers/remove.js';
const initialState = [];

const bookSlice = createSlice(
  {
    name:'booksState',
    initialState,
    reducers:{
      addNewBook: (state, { payload: newBook }) => {
        return [...state, newBook]
      },
      removeBook: (state, {payload: id}) => {
        return removeById(state,id);
      },
    }
  }
);

export const {addNewBook, removeBook} = bookSlice.actions;
export default bookSlice;