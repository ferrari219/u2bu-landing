import { createSlice } from '@reduxjs/toolkit';
import { ADD_POST } from 'actions/post';

export const initialState = {
  addPostLoading: false, // 이벤트 응모하기
  addPostDone: false,
  addPostError: null,

  mainPosts: [], // 응모 내역
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
      .addDefaultCase((state) => state),
});
export default postSlice;
