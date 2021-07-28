import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import ArchiveNotes from '../Pages/ArchiveNotes';
import DoneNotes from '../Pages/DoneNotes';
import Home from '../Pages/Home';

const Content: React.FC = () => {
  return (
    <Switch>
      <Route component={Home} path='/home' />
      <Route component={DoneNotes} path='/doteNotes' />
      <Route component={ArchiveNotes} path='/archiveNotes' />
      <Redirect from='*' to='/home' />
    </Switch>
  );
};

export default Content;
