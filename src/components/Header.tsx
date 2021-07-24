import React from 'react';

interface Props {}

const Header = (props: Props) => {
  return (
    <thead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>First</th>
        <th scope='col'>Last</th>
        <th scope='col'>Handle</th>
      </tr>
    </thead>
  );
};

export default Header;
