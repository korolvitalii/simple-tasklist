import React from 'react';
import addIcon from '../assets/icons/add_white_36dp.svg';
import { Button } from './Button';

interface Props {}

const handleOnClick = (): void => console.log('work!!');

const Header: React.FC = (props: Props) => {
  return (
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Created</th>
        <th>Category</th>
        <th>Content</th>
        <th>Dates</th>
        <Button variant='secondary' icon={addIcon} onClick={handleOnClick}></Button>
      </tr>
    </thead>
  );
};

export default Header;
