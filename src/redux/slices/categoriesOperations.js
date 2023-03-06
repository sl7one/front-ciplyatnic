import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from 'utils/baseURL';

const categories = axios.create({
  baseURL: BASE_URL,
});

export const fetchCategories = createAsyncThunk(
  'categories/fetchAll',
  async (_, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auhtSate.token;
      // tokenService.set(token);
      const response = await categories.get('/categories');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
