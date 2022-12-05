import { createSlice } from '@reduxjs/toolkit';
import { SIGN_UP } from 'actions/user';

export const initialState = {
  signupLoading: false,
  signupDone: false,
  signupError: null,

  me: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducer: {},
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
