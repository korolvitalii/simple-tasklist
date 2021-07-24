import React from 'react';
import Header from '../components/Header';
import Task from '../components/Task';

interface Props {}

const AddTask = (props: Props) => {
  return (
    <table className='table'>
      <Header />
      <tbody>
        <Task />
      </tbody>
    </table>
  );
};

export default AddTask;
