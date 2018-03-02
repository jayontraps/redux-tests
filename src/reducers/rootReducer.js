import {combineReducers} from 'redux';
import stuff from './stuffReducer';
import test from './testReducer';
import toggle from './toggleReducer';

const rootReducer = combineReducers({
  stuff,
  data: test,
  toggle
});

export default rootReducer;
