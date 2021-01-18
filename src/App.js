import React, { Component } from 'react';
import './App.css';
import { ReducerDemo } from './components/useReducer/ReducerDemo';
class App extends Component {
  render() {
    return (
      <div className='row'>
        <ReducerDemo />
      </div>
    );
  }
}

export default App;
