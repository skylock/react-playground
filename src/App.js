import React, { Component } from 'react';
import './App.css';
import { ToDosReducerDemo } from './components/useReducer/TodosReducerDemo';
class App extends Component {
  render() {
    return (
      <div className='row'>
        <div className='column'>
          <ToDosReducerDemo />
        </div>
      </div>
    );
  }
}

export default App;
