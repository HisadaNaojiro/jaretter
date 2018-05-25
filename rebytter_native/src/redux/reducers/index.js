import { combineReducers } from 'redux';
import auth from './auth';
import tweet from './tweet';

const rootReducer = combineReducers({
  auth,tweet
});

export default rootReducer;
