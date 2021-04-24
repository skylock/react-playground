import React from 'react';
import './App.css';
import { CounterProvider } from './components/useContext/CounterProvider';
import CountDisplay from './components/useContext/CountDisplay';
import Counter from './components/useContext/Counter';

const App = () => {
  return (
    <div className='row'>
      <div className='column'>
        <CounterProvider>
          <Counter />
          <CountDisplay />
        </CounterProvider>
      </div>
    </div>
  );
};

export default App;
