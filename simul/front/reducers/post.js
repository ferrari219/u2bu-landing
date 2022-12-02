import { createSlice } from '@reduxjs/toolkit';
import { ADD_POST } from 'actions/post';

export const initialState = {
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,

  mainPosts: [],
  imagePaths: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ADD_POST.pending, (state) => {
        state.addPostLoading = true;
        state.addPostDone = false;
        state.addPostError = null;
      })
      .addCase(ADD_POST.fulfilled, (state, action) => {
        state.addPostLoading = false;
        state.addPostDone = true;
        state.imagePaths = action.payload;
      })
      .addCase(ADD_POST.rejected, (state, action) => {
        state.addPostLoading = false;
        state.addPostError = action.payload;
      })
      .addDefaultCase((state) => state);
  },
});
