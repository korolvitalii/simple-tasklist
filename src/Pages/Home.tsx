import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from 'react-bootstrap';

import data from '../assets/data.json';
import Note from '../components/Note';
import TableHeader from '../components/TableHeader';
import { importNotes, TodoNote } from '../redux/actions/todoActions';
import CreateNoteModal from '../components/CreateNoteModal';

const Notes: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(importNotes(data));
  }, [dispatch]);
  const allNotes = useSelector(({ allNotes }: { allNotes: Array<TodoNote> }) => allNotes);

  const [show, setShow] = useState(false);

  const onClickToggleForm = (): void => {
    setShow(!show);
  };
  const onClickCloseForm = (): void => {
    setShow(false);
  };

  return (
    <>
      <Table responsive striped bordered hover variant='dark'>
        <TableHeader notes={allNotes} />
        <Note />
      </Table>
      <div className='d-flex justify-content-end'>
        <Button onClick={onClickToggleForm} variant='outline-dark' className='pull-right'>
          Add new note
        </Button>
        <CreateNoteModal showModal={show} onClickCloseForm={onClickCloseForm} />
      </div>
    </>
  );
};

export default Notes;
