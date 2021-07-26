import { TodoTask, TodoActions, TodoActionsTypes } from '../actions/todoAction';

export const todoReducer = (state = [] as TodoTask[], action: TodoActionsTypes): TodoTask[] => {
  switch (action.type) {
    case TodoActions.ADD_TASK: {
      return [...state, action.payload];
    }
    case TodoActions.EDIT_TASK: {
      return [...state, action.payload];
    }
    case TodoActions.ADD_TASK: {
      return [...state, action.payload];
    }
    case TodoActions.IMPORT_TASKS: {
      return action.payload;
    }
    default:
      return state;
  }
};
