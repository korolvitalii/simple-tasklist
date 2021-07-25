import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Todo from '../Pages/AllNotes';

interface Props {}

const Content = (props: Props) => {
  return (
    <Switch>
      <Route component={Todo} path='/todo' />
      {/* <Route component={DoneNotes} path='/doteNotes' /> */}
      {/* <Route component={ArchiveNotes} path='/archiveNotes' /> */}
      <Redirect from='*' to='/todo' />
    </Switch>
  );
};

export default Content;
