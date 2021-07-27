import { DoneNote, DoneActions, DoneActionsTypes } from '../actions/doneActions';

export const doneReducer = (state = [] as DoneNote[], action: DoneActionsTypes): DoneNote[] => {
  switch (action.type) {
    case DoneActions.ADD_NOTE: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};
