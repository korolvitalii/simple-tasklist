import React from 'react';
import { Button } from 'react-bootstrap';
import { BsCheckAll } from 'react-icons/bs';
import { BsArchive } from 'react-icons/bs';
import { BsFillTrashFill } from 'react-icons/bs';

interface Props {}

const handleOnClick = (): void => console.log('work!!');

const Header: React.FC = (props: Props) => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Created</th>
        <th>Category</th>
        <th>Content</th>
        <th>Dates</th>
        <th>
          <Button onClick={handleOnClick} variant='dark'>
            <BsCheckAll />
          </Button>
          <Button variant='dark'>
            <BsArchive />
          </Button>
          <Button variant='dark'>
            <BsFillTrashFill />
          </Button>
        </th>
      </tr>
    </thead>
  );
};

export default Header;
