import React from 'react';
import { Table } from 'react-bootstrap';
import { RootStateOrAny, useSelector } from 'react-redux';
import Archive from '../components/Archive';
import TableHeader from '../components/TableHeader';

const DoneNotes: React.FC = () => {
  const archiveNotes = useSelector((state: RootStateOrAny) => state.archiveNotes);
  return (
    <>
      <Table responsive striped bordered hover variant='dark'>
        <TableHeader notes={archiveNotes} />
        <Archive />
      </Table>
    </>
  );
};
export default DoneNotes;
