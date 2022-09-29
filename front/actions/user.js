import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { backURL } from "config/config";

axios.defaults.baseURL = backURL;
// axios.defaults.withCredentials = true;

export const SIGN_UP = createAsyncThunk(
  "user/signup",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("/user/signup", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
