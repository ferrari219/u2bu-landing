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
      .addCase(SIGN_UP.pending, (state) => {})
      .addCase(SIGN_UP.fulfilled, (state, action) => {})
      .addCase(SIGN_UP.rejected, (state, action) => {})
      .addDefaultCase((state) => state),
});
export default userSlice;
