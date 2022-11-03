import { createSlice } from '@reduxjs/toolkit';
import { ADD_POST, UPLOAD_IMAGES } from 'actions/post';

export const initialState = {
  addPostLoading: false, //이벤트 응모하기
  addPostDone: false,
  addPostError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,

  mainPosts: [],
  imagePaths: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(ADD_POST.pending, (state) => {
        state.addPostLoading = true;
        state.addPostDone = false;
        state.addPostError = null;
      })
      .addCase(ADD_POST.fulfilled, (state, action) => {
        state.addPostLoading = false;
        state.addPostDone = true;
        state.mainPosts.unshift(action.payload);
        state.imagePaths = [];
      })
      .addCase(ADD_POST.rejected, (state, action) => {
        state.addPostLoading = false;
        state.addPostError = action.payload;
      })
      .addCase(UPLOAD_IMAGES.pending, (state) => {
        state.uploadImagesLoading = true;
        state.uploadImagesDone = false;
        state.uploadImagesError = null;
      })
      .addCase(UPLOAD_IMAGES.fulfilled, (state, action) => {
        state.uploadImagesLoading = true;
        state.uploadImagesDone = false;
        state.imagePaths = state.imagePaths.concat(action.payload);
      })
      .addCase(UPLOAD_IMAGES.rejected, (state, action) => {
        state.uploadImagesLoading = true;
        state.uploadImagesError = action.payload;
      })
      .addDefaultCase((state) => state),
});

export default postSlice;
