import React from 'react';
import { Table } from 'react-bootstrap';
import { RootStateOrAny, useSelector } from 'react-redux';
import Done from '../components/Done';
import Note from '../components/Note';
import TableHeader from '../components/TableHeader';

const DoneNotes: React.FC = () => {
  const notes = useSelector((state: RootStateOrAny) => state.doneNotes);
  console.log(notes);
  return (
    <>
      <Table responsive striped bordered hover variant='dark'>
        <TableHeader />
        <Done />
      </Table>
    </>
  );
};
export default DoneNotes;
