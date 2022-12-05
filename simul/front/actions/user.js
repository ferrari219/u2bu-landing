import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backURL } from 'config/config';

axios.defaults.baseURL = backURL;

export const SIGN_UP = createAsyncThunk(
  'user',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/user', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
