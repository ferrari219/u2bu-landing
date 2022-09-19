import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  me: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default userSlice;
