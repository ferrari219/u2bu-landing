import { createAsyncThunk } from '@reduxjs/toolkit';

export const SIGN_UP = createAsyncThunk(
  'user/signup',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('user', data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
