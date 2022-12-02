const { HYDRATE } = require('next-redux-wrapper');
const { combineReducers } = require('redux');
import postSlice from './post';

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE', action);
      return action.payload;
    default:
      const combineReducer = combineReducers({
        post: postSlice,
      });
      return combineReducer(state, action);
  }
};
export default rootReducer;
