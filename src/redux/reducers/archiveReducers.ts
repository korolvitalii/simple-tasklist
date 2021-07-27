import { ArchiveActions, ArchiveNote, ArchiveActionsTypes } from '../actions/archiveActions';

export const archiveReducer = (
  state = [] as ArchiveNote[],
  action: ArchiveActionsTypes,
): ArchiveNote[] => {
  switch (action.type) {
    case ArchiveActions.ADD_ARCHIVE_NOTE: {
      return [...state, action.payload];
    }
    case ArchiveActions.UNARCHIVE_NOTE: {
      const newArchiveNotes = state.filter((note) => note.id === action.payload.id);
      return newArchiveNotes;
    }
    default:
      return state;
  }
};
