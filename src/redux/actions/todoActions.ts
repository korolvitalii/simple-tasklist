export enum TodoActions {
  ADD_NOTE = 'Add todo Note',
  ADD_ALL_NOTES = 'Add todo Note',
  EDIT_NOTE = 'Edit todo Note',
  REMOVE_NOTE = 'Remove todo Note',
  REMOVE_ALL_NOTES = 'Remove all todo Notes',
  IMPORT_NOTES = 'Import Notes',
}

export type TodoNote = {
  id: number;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string;
};

export type AddNote = {
  type: TodoActions.ADD_NOTE;
  payload: TodoNote;
};

export type EditNote = {
  type: TodoActions.EDIT_NOTE;
  payload: TodoNote;
};

export type RemoveNote = {
  type: TodoActions.REMOVE_NOTE;
  payload: {
    id: number;
  };
};

export type RemoveAllNote = {
  type: TodoActions.REMOVE_ALL_NOTES;
};

export type ImportNotes = {
  type: TodoActions.IMPORT_NOTES;
  payload: TodoNote[];
};

export type TodoActionsTypes = AddNote | EditNote | RemoveNote | RemoveAllNote | ImportNotes;

export const addNote = (note: TodoNote): TodoActionsTypes => ({
  type: TodoActions.ADD_NOTE,
  payload: note,
});

export const editNote = (note: TodoNote): TodoActionsTypes => ({
  type: TodoActions.EDIT_NOTE,
  payload: note,
});

export const removeNote = (id: number): TodoActionsTypes => ({
  type: TodoActions.REMOVE_NOTE,
  payload: {
    id,
  },
});

export const removeAllNote: TodoActionsTypes = {
  type: TodoActions.REMOVE_ALL_NOTES,
};

export const importNotes = (notes: Array<TodoNote>): TodoActionsTypes => ({
  type: TodoActions.IMPORT_NOTES,
  payload: notes,
});
