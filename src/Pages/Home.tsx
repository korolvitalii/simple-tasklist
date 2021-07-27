import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Bootstrap from 'react-bootstrap';

import data from '../assets/data.json';
import Note from '../components/Note';
import TableHeader from '../components/TableHeader';
import { importNotes } from '../redux/actions/todoActions';

const Notes: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(importNotes(data));
  }, []);

  return (
    <>
      <Bootstrap.Table responsive striped bordered hover variant='dark'>
        <TableHeader />
        <Note />
      </Bootstrap.Table>
    </>
  );
};

export default Notes;
