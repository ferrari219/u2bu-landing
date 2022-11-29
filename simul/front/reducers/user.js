import { createSlice } from '@reduxjs/toolkit';
import { SIGN_UP } from 'actions/user';

export const initialState = {
  signupLoading: false, //회원가입
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
      .addCase(SIGN_UP.fulfilled, (state, action) => {
        state.signupLoading = false;
        state.signupDone = true;
      })
      .addCase(SIGN_UP.rejected, (state, action) => {
        state.signupLoading = false;
        state.signupError = action.payload;
      })
      .addDefaultCase((state) => state),
});
export default userSlice;
