import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backURL } from 'config/config';

axios.defaults.baseURL = backURL;

export const LOG_IN = createAsyncThunk(
  'user',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/user/login', data);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
