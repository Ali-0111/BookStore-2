import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

const API_KEY = 'jyU6Rq2z7hA2oSKZZJ5f';

export const getBooks_API = createAsyncThunk(
  'booksState/getBooks', 
  async () => {
    const response = await axios.get(`${BASE_URL}${API_KEY}/books`);
    return response.data;
});

export const addBook_API = createAsyncThunk(
  'booksState/addBook', 
  async (newBook) => {
    const response = await axios.post(`${BASE_URL}${API_KEY}/books`, newBook);
    return {addMsg:response.data, newBook};
});

export const removeBook_API = createAsyncThunk(
  'booksState/removeBook', 
  async (id) => {
    const response = await axios.delete(`${BASE_URL}${API_KEY}/books/${id}`);
    return {delMsg:response.data, id};
});
