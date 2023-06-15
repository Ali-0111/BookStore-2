import { createSlice } from '@reduxjs/toolkit';
const initialState = { check: 'I am not empty'};

const categorySlice = createSlice({
  name:'categoryState',
  initialState: initialState,
  reducers: {
    checkStatus: (state) => {
      state.status = 'Under Construction'
    },
  },
});

export default categorySlice;