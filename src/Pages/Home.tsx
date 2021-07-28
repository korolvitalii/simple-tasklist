import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

import data from '../assets/data.json';
import Note from '../components/Note';
import TableHeader from '../components/TableHeader';
import { importNotes, TodoNote } from '../redux/actions/todoActions';

const Notes: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(importNotes(data));
  }, [dispatch]);
  const allNotes = useSelector(({ allNotes }: { allNotes: Array<TodoNote> }) => allNotes);
  return (
    <>
      <Table responsive striped bordered hover variant='dark'>
        <TableHeader notes={allNotes} />
        <Note />
      </Table>
    </>
  );
};

export default Notes;
