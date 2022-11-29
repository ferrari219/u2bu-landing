import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
