import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { backURL } from 'config/config';

axios.defaults.baseURL = backURL;

// 글쓰기
export const ADD_POST = createAsyncThunk(
	'post',
	async (data, { rejectWithValue }) => {
		try {
			const response = await axios.post('/post', data);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

// 이미지 업로드
export const UPLOAD_IMAGES = createAsyncThunk(
	'post/images',
	async (data, { rejectWithValue }) => {
		try {
			const response = await axios.post('/post/images', data);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
