import { createSlice } from "@reduxjs/toolkit";
import { SIGN_UP } from "actions/user";

export const initialState = {
  me: null,
  signUpData: null,

  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
};

const userSlice = createSlice({
  name: "user",
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
        //state.me = null;
        // console.log(action.data);
        // state.signUpData = action.payload;
      })
      .addCase(SIGN_UP.rejected, (state, action) => {
        state.signUpLoading = false;
        state.signUpError = action.payload;
      })
      .addDefaultCase((state) => state);
  },
});

export default userSlice;
