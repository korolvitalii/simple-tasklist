import React, { useState } from 'react';
import * as Bootstrap from 'react-bootstrap';
import TableHeader from '../components/TableHeader';
import { MyModal } from '../components/Modal';
import Task from '../components/Task';

interface Props {}

const AllNotes: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleAddNoteOnClick = (): void => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Bootstrap.Table striped bordered hover variant='dark'>
        <TableHeader />
        <Task onClickModal={handleAddNoteOnClick} />
      </Bootstrap.Table>
    </>
  );
};

export default AllNotes;
