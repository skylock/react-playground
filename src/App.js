import React, { Component } from 'react';
import './App.css';
import { CountProvider } from './components/useContext/count-context';
import { CountDisplay } from './components/useContext/CountDisplay';

const App = () => {
  return (
    <div className='row'>
      <div className='column'>
        <CountDisplay />
      </div>
    </div>
  );
};

export default App;
