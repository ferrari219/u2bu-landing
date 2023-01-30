import { createSlice } from '@reduxjs/toolkit';
import { ADD_POST } from 'actions/post';

export const initialState = {
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,

  mainPosts: [],
};

const postSlice = createSlice({ name: 'post', initialState, reducers: {} });
