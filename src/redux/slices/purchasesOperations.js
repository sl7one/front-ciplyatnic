import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from 'utils/baseURL';

const cyplyatnic = axios.create({
  baseURL: BASE_URL,
});

export const fetchPurchases = createAsyncThunk(
  'purchases/fetchAll',
  async (_, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auhtSate.token;
      // tokenService.set(token);
      const response = await cyplyatnic.get('/purchases');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addPurchases = createAsyncThunk(
  'purchases/addPurchase',
  async (data, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auhtSate.token;
      // tokenService.set(token);
      const response = await cyplyatnic.post('/purchases', data);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
