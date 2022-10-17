import { createSlice } from '@reduxjs/toolkit';
import { LOG_IN, LOG_OUT, SIGN_UP } from 'actions/user';

export const initialState = {
  me: null,
  signUpData: null,

  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SIGN_UP.pending, (state) => {
        state.signUpLoading = true;
        state.signUpDone = false;
        state.signUpError = null;
      })
      .addCase(SIGN_UP.fulfilled, (state) => {
        state.signUpLoading = false;
        state.signUpDone = true;
      })
      .addCase(SIGN_UP.rejected, (state, action) => {
        state.signUpLoading = false;
        state.signUpError = action.payload;
      })
      .addCase(LOG_IN.pending, (state) => {
        state.logInLoading = true;
        state.logInDone = false;
        state.logInError = null;
      })
      .addCase(LOG_IN.fulfilled, (state, action) => {
        state.logInLoading = false;
        state.logInDone = true;
        state.me = action.payload;
      })
      .addCase(LOG_IN.rejected, (state, action) => {
        state.logInLoading = false;
        state.logInError = action.payload;
      })
      .addCase(LOG_OUT.pending, (state) => {
        state.logOutLoading = true;
        state.logOutDone = false;
        state.logOutError = null;
      })
      .addCase(LOG_OUT.fulfilled, (state, action) => {
        state.logOutLoading = false;
        state.logOutDone = true;
        state.me = action.payload;
      })
      .addCase(LOG_OUT.rejected, (state, action) => {
        state.logOutLoading = false;
        state.logOutError = action.payload;
      })
      .addDefaultCase((state) => state);
  },
});

export default userSlice;
