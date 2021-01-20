import React from 'react';
import './App.css';
import Counter from './components/useContext/Counter';

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
        <Counter children={children}></Counter>
      </div>
    </div>
  );
};

export default App;
