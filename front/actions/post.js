import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//게시물 작성
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
