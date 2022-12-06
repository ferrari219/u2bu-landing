import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { backURL } from 'config/config';

axios.defaults.baseURL = backURL;

//회원가입
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

//로그인
export const LOG_IN = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/user/login', data);
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  }
);
