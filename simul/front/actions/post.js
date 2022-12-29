import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backURL } from 'config/config';

axios.defaults.baseURL = backURL;

export const ADD_POST = createAsyncThunk(
  'post',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/post', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
