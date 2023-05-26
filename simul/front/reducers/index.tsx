import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import postSlice from './post';
import userSlice from './user';

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE', action);
      return action.payload;
    default:
      const combineReducer = combineReducers({
        post: postSlice.reducer,
        user: userSlice.reducer,
      });
      return combineReducer(state, action);
  }
};
export default rootReducer;
