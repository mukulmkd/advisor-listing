import { combineReducers } from 'redux';
import advisorReducer from './advisorReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  advisors: advisorReducer,
  error: errorReducer,
});
export default rootReducer;
