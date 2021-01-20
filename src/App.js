import React from 'react';
import './App.css';
import Counter from './components/useContext/Counter';
import { CounterContext } from './components/useContext/CounterContext';

const children = (
  <React.Fragment>
    <div>new div</div>
    <p>a new p</p>
  </React.Fragment>
);

const App = () => {
  return (
    <div className='row'>
      <div className='column'>
        <CounterContext.Provider value={'hello from counter context'}>
          <Counter children={children}></Counter>
        </CounterContext.Provider>
      </div>
    </div>
  );
};

export default App;
