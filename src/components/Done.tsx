import React from 'react';
import { Button } from 'react-bootstrap';
import { BsArchive, BsFillTrashFill, BsPencil, BsCheck } from 'react-icons/bs';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { DoneNote, addNote } from '../redux/actions/doneActions';
import { TodoNote, removeNote } from '../redux/actions/todoActions';
import { archivateNote } from '../redux/actions/archiveActions';

const Done: React.FC = () => {
  const notes = useSelector((state: RootStateOrAny) => state.doneNotes);
  const dispatch = useDispatch();

  const onClickRemoveNote =
    (id: number) =>
    (e: React.MouseEvent): void => {
      dispatch(removeNote(id));
    };

  const onClickArchiveNote =
    (id: number) =>
    (e: React.MouseEvent): void => {
      const currentNote = notes.find((note: DoneNote) => note.id === id);
      dispatch(archivateNote(currentNote));
      dispatch(removeNote(id));
    };

  return (
    <tbody>
      {notes.map((note: TodoNote) => {
        const { name, created, category, content, dates, id } = note;
        return (
          <tr key={`${id}--${name}`}>
            <td>{name}</td>
            <td>{created}</td>
            <td>{category}</td>
            <td>{content}</td>
            <td>{dates}</td>
            <td>
              <Button onClick={onClickArchiveNote(id)} variant='dark'>
                <BsArchive />
              </Button>
              <Button onClick={onClickRemoveNote(id)} variant='dark'>
                <BsFillTrashFill />
              </Button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Done;
