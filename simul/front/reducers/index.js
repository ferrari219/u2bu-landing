import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

const rootreducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        // user: userReducer,
      });
      return combinedReducer(state, action);
    }
  }
};
export default rootreducer;
