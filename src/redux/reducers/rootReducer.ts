import { combineReducers } from 'redux';
import { doneReducer } from './doneReducers';
import { todoReducer } from './todoReducers';

const rootReducer = combineReducers({
  todo: todoReducer,
  done: doneReducer,
});

export default rootReducer;
