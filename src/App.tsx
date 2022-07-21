import React from 'react';

import { Header } from './containers/Header';
import { UsersList } from './containers/UsersList';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <UsersList />
    </div>
  );
}

export default App;
