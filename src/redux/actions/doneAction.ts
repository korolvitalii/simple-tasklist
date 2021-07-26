export enum DoneActions {
  ADD_TASK = 'Add Done task',
  EDIT_TASK = 'Edit Done task',
  REMOVE_TASK = 'Remove Done task',
  ARCHIVE_TASK = 'Archive Done task',
  IMPORT_TASKS = 'Import tasks',
}

export interface DoneTask {
  id: number;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: number;
}

export interface AddTask {
  type: DoneActions.ADD_TASK;
  payload: DoneTask;
}

export interface EditTask {
  type: DoneActions.EDIT_TASK;
  payload: DoneTask;
}

export interface RemoveTask {
  type: DoneActions.REMOVE_TASK;
  payload: {
    id: number;
  };
}

export interface ArchiveTask {
  type: DoneActions.ARCHIVE_TASK;
  payload: DoneTask;
}

export interface ImportTasks {
  type: DoneActions.IMPORT_TASKS;
  payload: DoneTask[];
}

export type DoneActionsTypes = AddTask | EditTask | RemoveTask | ArchiveTask | ImportTasks;

export const addTask = (task: DoneTask): DoneActionsTypes => ({
  type: DoneActions.ADD_TASK,
  payload: task,
});

export const editTask = (task: DoneTask): DoneActionsTypes => ({
  type: DoneActions.EDIT_TASK,
  payload: task,
});

export const removeTask = (id: number): DoneActionsTypes => ({
  type: DoneActions.REMOVE_TASK,
  payload: {
    id,
  },
});

export const archiveTask = (task: DoneTask): DoneActionsTypes => ({
  type: DoneActions.ARCHIVE_TASK,
  payload: task,
});

export const importTasks = (tasks: DoneTask[]): DoneActionsTypes => ({
  type: DoneActions.IMPORT_TASKS,
  payload: tasks,
});
