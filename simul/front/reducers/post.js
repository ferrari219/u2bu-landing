import { createSlice } from '@reduxjs/toolkit';
import { ADD_POST } from '../actions/post';

export const initialState = {};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => builder.addCase(ADD_POST, (state, action) => {}),
});

export default postSlice;
