import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { backURL } from 'config/config';

axios.defaults.baseURL = backURL;

//SignUp
export const ADD_POST = createAsyncThunk(
  'post/ADD_POST',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/post', data);
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  }
);
