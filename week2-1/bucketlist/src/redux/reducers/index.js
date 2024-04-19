// redux/reducers/index.js

import { combineReducers } from 'redux';
import bucketListReducer from './bucketListReducer';

const rootReducer = combineReducers({
  bucketListReducer,
});

export default rootReducer;
