import { createSlice } from '@reduxjs/toolkit';
const initialState = [];

const categorySlice = createSlice({
  name:'categoryState',
  initialState: initialState,
  reducers: {
    checkStatus: () => {
      return 'Under Construction'
    },
  },
});

export const { checkStatus } = categorySlice.actions;
export default categorySlice;