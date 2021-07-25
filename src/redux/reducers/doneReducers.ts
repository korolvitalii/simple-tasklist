import { DoneTask, DoneActions, DoneActionsTypes } from '../actions/doneAction';

export const doneReducer = (state = [] as DoneTask[], action: DoneActionsTypes): DoneTask[] => {
  switch (action.type) {
    case DoneActions.ADD_TASK: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};
