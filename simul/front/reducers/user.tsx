import { LOG_IN } from 'actions/user';

export const initialState = {
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
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
