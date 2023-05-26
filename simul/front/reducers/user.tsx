import { createSlice } from '@reduxjs/toolkit';
import { LOG_IN, SIGN_UP } from 'actions/user';

export const initialState = {
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: null,
  signupLoading: false, // 회원가입
  signupDone: false,
  signupError: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(SIGN_UP.pending, (state) => {
        state.signupLoading = true;
        state.signupDone = false;
        state.signupError = null;
      })
      .addCase(SIGN_UP.fulfilled, (state) => {
        state.signupLoading = false;
        state.signupDone = true;
      })
      .addCase(SIGN_UP.rejected, (state, action) => {
        state.signupLoading = false;
        state.signupError = action.payload;
      })
      .addCase(LOG_IN.pending, (state) => {
        state.logInLoading = true;
        state.logInDone = false;
        state.logInError = null;
      })
      .addCase(LOG_IN.fulfilled, (state) => {
        state.logInLoading = false;
        state.logInDone = true;
      })
      .addCase(LOG_IN.rejected, (state, action) => {
        state.logInLoading = true;
        state.logInError = action.payload;
      })
      .addDefaultCase((state) => state),
});
export default userSlice;
