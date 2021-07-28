import { TodoNote, TodoActions, TodoActionsTypes } from '../actions/todoActions';

export const todoReducer = (
  state = [] as Array<TodoNote>,
  action: TodoActionsTypes,
): Array<TodoNote> => {
  switch (action.type) {
    case TodoActions.ADD_NOTE: {
      return [...state, action.payload];
    }
    case TodoActions.EDIT_NOTE: {
      return [...state, action.payload];
    }
    case TodoActions.REMOVE_NOTE: {
      const newNotes = state.filter((note) => note.id !== action.payload.id);
      return newNotes;
    }
    case TodoActions.REMOVE_ALL_NOTES: {
      return [];
    }
    case TodoActions.IMPORT_NOTES: {
      return action.payload;
    }
    default:
      return state;
  }
};
