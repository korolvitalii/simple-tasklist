import { combineReducers } from 'redux';
import { archiveReducer } from './archiveReducers';
import { doneReducer } from './doneReducers';
import { todoReducer } from './todoReducers';

const rootReducer = combineReducers({
  allNotes: todoReducer,
  doneNotes: doneReducer,
  archiveNotes: archiveReducer,
});

export default rootReducer;
