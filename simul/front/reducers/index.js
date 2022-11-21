import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import postSlice from 'reducers/post';

const rootreducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        post: postSlice.reducer,
      });
      return combinedReducer(state, action);
    }
  }
};
export default rootreducer;
