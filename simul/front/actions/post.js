import { createAsyncThunk } from '@reduxjs/toolkit';
import { backURL } from 'config/config';
import axios from 'axios';

axios.defaults.baseURL = backURL;

// 글쓰기
export const ADD_POST = createAsyncThunk(
  'post',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/post', data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// 이미지 업로드
export const UPLOAD_IMAGES = createAsyncThunk(
  'post/images',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/post/images', data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
