import { ArchiveActions, ArchiveNote, ArchiveActionsTypes } from '../actions/archiveActions';

export const archiveReducer = (
  state = [] as Array<ArchiveNote>,
  action: ArchiveActionsTypes,
): Array<ArchiveNote> => {
  switch (action.type) {
    case ArchiveActions.ARCHIVATE_NOTE: {
      return [...state, action.payload];
    }
    case ArchiveActions.ARCHIVATE_ALL_NOTES: {
      return action.payload;
    }
    case ArchiveActions.UNARCHIVE_NOTE: {
      const newArchiveNotes = state.filter((note) => note.id === action.payload.id);
      return newArchiveNotes;
    }
    default:
      return state;
  }
};
