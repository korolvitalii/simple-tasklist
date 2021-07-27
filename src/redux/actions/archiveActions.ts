export enum ArchiveActions {
  ADD_ARCHIVE_NOTE = 'Add to archive note',
  UNARCHIVE_NOTE = 'Remove note with archive',
}

export type ArchiveNote = {
  id: number;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: number;
};

export type AddToArchiveNote = {
  type: ArchiveActions.ADD_ARCHIVE_NOTE;
  payload: ArchiveNote;
};

export type UnarchiveNote = {
  type: ArchiveActions.UNARCHIVE_NOTE;
  payload: ArchiveNote;
};

export type ArchiveActionsTypes = AddToArchiveNote | UnarchiveNote;

export const addToArchiveNote = (note: ArchiveNote): ArchiveActionsTypes => ({
  type: ArchiveActions.ADD_ARCHIVE_NOTE,
  payload: note,
});

export const unarchiveNote = (note: ArchiveNote): ArchiveActionsTypes => ({
  type: ArchiveActions.UNARCHIVE_NOTE,
  payload: note,
});
