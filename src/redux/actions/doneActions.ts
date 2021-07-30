import { TodoNote } from './todoActions';

export enum DoneActions {
  ADD_NOTE = 'Add Done NOTE',
  ADD_ALL_NOTES = 'Add todo Note',
  EDIT_NOTE = 'Edit Done NOTE',
  REMOVE_NOTE = 'Remove Done NOTE',
  ARCHIVE_NOTE = 'Archive Done NOTE',
  IMPORT_NOTES = 'Import NOTES',
}

export type DoneNote = {
  id: number;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: Array<string>;
};

export type AddNote = {
  type: DoneActions.ADD_NOTE;
  payload: DoneNote;
};

export type AddAllNote = {
  type: DoneActions.ADD_ALL_NOTES;
  payload: Array<DoneNote>;
};

export type EditNote = {
  type: DoneActions.EDIT_NOTE;
  payload: DoneNote;
};

export type RemoveNote = {
  type: DoneActions.REMOVE_NOTE;
  payload: {
    id: number;
  };
};

export type ArchiveNote = {
  type: DoneActions.ARCHIVE_NOTE;
  payload: DoneNote;
};

export type ImportNotes = {
  type: DoneActions.IMPORT_NOTES;
  payload: DoneNote[];
};

export type DoneActionsTypes =
  | AddNote
  | AddAllNote
  | EditNote
  | RemoveNote
  | ArchiveNote
  | ImportNotes;

export const addNote = (note: DoneNote): DoneActionsTypes => ({
  type: DoneActions.ADD_NOTE,
  payload: note,
});

export const addAllNotes = (notes: Array<DoneNote | TodoNote>): DoneActionsTypes => ({
  type: DoneActions.ADD_ALL_NOTES,
  payload: notes,
});

export const editNote = (note: DoneNote): DoneActionsTypes => ({
  type: DoneActions.EDIT_NOTE,
  payload: note,
});

export const removeNote = (id: number): DoneActionsTypes => ({
  type: DoneActions.REMOVE_NOTE,
  payload: {
    id,
  },
});

export const archiveNote = (note: DoneNote): DoneActionsTypes => ({
  type: DoneActions.ARCHIVE_NOTE,
  payload: note,
});

export const importNotes = (notes: DoneNote[]): DoneActionsTypes => ({
  type: DoneActions.IMPORT_NOTES,
  payload: notes,
});
