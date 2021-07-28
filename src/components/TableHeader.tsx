import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { BsCheckAll } from 'react-icons/bs';
import { BsArchive } from 'react-icons/bs';
import { BsFillTrashFill } from 'react-icons/bs';
import { removeAllNote, TodoNote } from '../redux/actions/todoActions';
import { archivateAllNotes, ArchiveNote } from '../redux/actions/archiveActions';
import { addAllNotes, DoneNote } from '../redux/actions/doneActions';

type Props = {
  notes: Array<TodoNote>;
};

const TableHeader: React.FC<Props> = ({ notes }: Props) => {
  const dispatch = useDispatch();
  const onClickAddAllNoteToDone =
    (notes: Array<TodoNote | DoneNote | ArchiveNote> = []) =>
    (e: React.MouseEvent): void => {
      dispatch(removeAllNote);
      dispatch(addAllNotes(notes));
    };

  const handleArchivateAllNotes =
    (notes: Array<TodoNote> = []) =>
    (e: React.MouseEvent): void => {
      dispatch(archivateAllNotes(notes));
      dispatch(removeAllNote);
    };
  const handleRomoveAllNotes = () => {
    dispatch(removeAllNote);
  };

  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Created</th>
        <th>Category</th>
        <th>Content</th>
        <th>Dates</th>
        <th>
          <Button onClick={onClickAddAllNoteToDone(notes)} variant='dark'>
            <BsCheckAll />
          </Button>
          <Button onClick={handleArchivateAllNotes(notes)} variant='dark'>
            <BsArchive />
          </Button>
          <Button onClick={handleRomoveAllNotes} variant='dark'>
            <BsFillTrashFill />
          </Button>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
