import React from 'react';
import { Table } from 'react-bootstrap';
import { RootStateOrAny, useSelector } from 'react-redux';
import Archive from '../components/Archive';
import TableHeader from '../components/TableHeader';

const DoneNotes: React.FC = () => {
  const notes = useSelector((state: RootStateOrAny) => state.doneNotes);
  console.log(notes);
  return (
    <>
      <Table responsive striped bordered hover variant='dark'>
        <TableHeader />
        <Archive />
      </Table>
    </>
  );
};
export default DoneNotes;
