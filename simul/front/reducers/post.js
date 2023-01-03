import { createSlice } from '@reduxjs/toolkit';
import { ADD_POST, UPLOAD_IMAGES } from 'actions/post';

export const initialState = {
  addPostLoading: false, // 글쓰기
  addPostDone: false,
  addPostError: null,
  uploadImagesLoading: false, // 이미지 업로드
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
      .addCase(ADD_POST.fulfilled, (state) => {
        state.addPostLoading = false;
        state.addPostDone = true;
        state.mainPosts.unshift(action.data);
      })
      .addCase(ADD_POST.rejected, (state) => {
        state.addPostLoading = false;
        state.addPostError = action.error;
      })
      .addCase(UPLOAD_IMAGES.pending, (state) => {
        state.uploadImagesLoading = true;
        state.uploadImagesDone = false;
        state.uploadImagesError = null;
      })
      .addCase(UPLOAD_IMAGES.fulfilled, (state) => {
        state.uploadImagesLoading = false;
        state.uploadImagesDone = true;
        state.imagePaths = action.payload;
      })
      .addCase(UPLOAD_IMAGES.rejected, (state) => {
        state.uploadImagesLoading = false;
        state.uploadImagesError = action.payload;
      })
      .addDefaultCase((state) => state),
});
export default postSlice;
