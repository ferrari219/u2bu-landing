import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import postSlice from './post';
import post from './post';

const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            console.log('HYDRATE', action);
            return action.payload;
        default:
            const combinedReducer = combineReducers({
                post: postSlice.reducer
            });
            return combinedReducer(state, action);
    }
}
export default rootReducer;