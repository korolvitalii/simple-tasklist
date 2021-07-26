import React, { useEffect, useState } from 'react';
import * as Bootstrap from 'react-bootstrap';
import TableHeader from '../components/TableHeader';
import Note from '../components/Note';
import data from '../assets/data.json';
import { useDispatch } from 'react-redux';
import { importTasks } from '../redux/actions/todoAction';

interface Props {}

const Notes: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(importTasks(data));
  }, []);

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleAddNoteOnClick = (): void => {
    setShowModal(!showModal);
  };

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
