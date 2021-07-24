import React from 'react';
import { Route } from 'react-router-dom';
import Todo from './Pages/Todo';
import Done from './Pages/Done';
import AddTask from './Pages/AddTask';

const App: React.FC = () => {
  return (
    <div className='wrapper'>
      <Route path='/' component={Todo} exact />
      <Route path='/done' component={Done} exact />
      <Route path='/addTask' component={AddTask} exact />
    </div>
  );
};

export default App;
