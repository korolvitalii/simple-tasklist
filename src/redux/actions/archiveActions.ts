export enum ArchiveActions {
  ARCHIVATE_NOTE = 'Add to archive note',
  ARCHIVATE_ALL_NOTES = 'Add to archive all notes',
  UNARCHIVE_NOTE = 'Remove note with archive',
}

export type ArchiveNote = {
  id: number;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string;
};

export type ArchivateNote = {
  type: ArchiveActions.ARCHIVATE_NOTE;
  payload: ArchiveNote;
};

export type ArchivateAllNotes = {
  type: ArchiveActions.ARCHIVATE_ALL_NOTES;
  payload: Array<ArchiveNote>;
};

export type UnarchivateNote = {
  type: ArchiveActions.UNARCHIVE_NOTE;
  payload: ArchiveNote;
};

export type ArchiveActionsTypes = ArchivateNote | UnarchivateNote | ArchivateAllNotes;

export const archivateNote = (note: ArchiveNote): ArchiveActionsTypes => ({
  type: ArchiveActions.ARCHIVATE_NOTE,
  payload: note,
});

export const archivateAllNotes = (notes: Array<ArchiveNote>): ArchiveActionsTypes => ({
  type: ArchiveActions.ARCHIVATE_ALL_NOTES,
  payload: notes,
});

export const unarchiveNote = (note: ArchiveNote): ArchiveActionsTypes => ({
  type: ArchiveActions.UNARCHIVE_NOTE,
  payload: note,
});
