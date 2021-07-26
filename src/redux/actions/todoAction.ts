export enum TodoActions {
  ADD_TASK = 'Add todo task',
  EDIT_TASK = 'Edit todo task',
  REMOVE_TASK = 'Remove todo task',
  ARCHIVE_TASK = 'Archive todo task',
  IMPORT_TASKS = 'Import tasks',
}

export interface TodoTask {
  id: number;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string[];
}

export interface AddTask {
  type: TodoActions.ADD_TASK;
  payload: TodoTask;
}

export interface EditTask {
  type: TodoActions.EDIT_TASK;
  payload: TodoTask;
}

export interface RemoveTask {
  type: TodoActions.REMOVE_TASK;
  payload: {
    id: number;
  };
}

export interface ArchiveTask {
  type: TodoActions.ARCHIVE_TASK;
  payload: TodoTask;
}

export interface ImportTasks {
  type: TodoActions.IMPORT_TASKS;
  payload: TodoTask[];
}

export type TodoActionsTypes = AddTask | EditTask | RemoveTask | ArchiveTask | ImportTasks;

export const addTask = (task: TodoTask): TodoActionsTypes => ({
  type: TodoActions.ADD_TASK,
  payload: task,
});

export const editTask = (task: TodoTask): TodoActionsTypes => ({
  type: TodoActions.EDIT_TASK,
  payload: task,
});

export const removeTask = (id: number): TodoActionsTypes => ({
  type: TodoActions.REMOVE_TASK,
  payload: {
    id,
  },
});

export const archiveTask = (task: TodoTask): TodoActionsTypes => ({
  type: TodoActions.ARCHIVE_TASK,
  payload: task,
});

export const importTasks = (tasks: TodoTask[]): TodoActionsTypes => ({
  type: TodoActions.IMPORT_TASKS,
  payload: tasks,
});
