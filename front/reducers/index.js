import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import userSlice from './user';

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE', action);
      return action.payload;
    default:
      const combineReducer = combineReducers({
        user: userSlice.reducer,
      });
      return combineReducer(state, action);
  }
};

export default rootReducer;
