import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import Content from '../src/content/Content';

import store from './redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <HashRouter>
          <Navbar />
          <Content />
        </HashRouter>
      </div>
    </Provider>
  );
};

export default App;
