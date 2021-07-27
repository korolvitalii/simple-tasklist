import React, { FC } from 'react';
// import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

interface Props {}

const Header: FC = (props: Props) => {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Notelist</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>All Notes</Nav.Link>
            <Nav.Link href='#doteNotes'>Done Notes</Nav.Link>
            <Nav.Link href='#archiveNotes'>Archive Notes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
