import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { backURL } from 'config/config';

axios.defaults.baseURL = backURL;

export const SIGN_UP = createAsyncThunk(
  'user',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/user', data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
