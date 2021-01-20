import React from 'react';
import './App.css';
import Counter from './components/useContext/Counter';

const App = () => {
  return (
    <div className='row'>
      <div className='column'>
        <Counter />
      </div>
    </div>
  );
};

export default App;
