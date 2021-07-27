export enum TodoActions {
  ADD_NOTE = 'Add todo Note',
  EDIT_NOTE = 'Edit todo Note',
  REMOVE_NOTE = 'Remove todo Note',
  ARCHIVE_NOTE = 'Archive todo Note',
  IMPORT_NOTES = 'Import Notes',
}

export type TodoNote = {
  id: number;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string[];
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

export type ArchiveNote = {
  type: TodoActions.ARCHIVE_NOTE;
  payload: TodoNote;
};

export type ImportNotes = {
  type: TodoActions.IMPORT_NOTES;
  payload: TodoNote[];
};

export type TodoActionsTypes = AddNote | EditNote | RemoveNote | ArchiveNote | ImportNotes;

export const addNote = (Note: TodoNote): TodoActionsTypes => ({
  type: TodoActions.ADD_NOTE,
  payload: Note,
});

export const editNote = (Note: TodoNote): TodoActionsTypes => ({
  type: TodoActions.EDIT_NOTE,
  payload: Note,
});

export const removeNote = (id: number): TodoActionsTypes => ({
  type: TodoActions.REMOVE_NOTE,
  payload: {
    id,
  },
});

export const archiveNote = (Note: TodoNote): TodoActionsTypes => ({
  type: TodoActions.ARCHIVE_NOTE,
  payload: Note,
});

export const importNotes = (Notes: TodoNote[]): TodoActionsTypes => ({
  type: TodoActions.IMPORT_NOTES,
  payload: Notes,
});
