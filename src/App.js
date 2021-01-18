import React, { Component } from 'react';
import './App.css';
import { UseRefLoginForm } from './components/useRef/UseRefLoginForm';
class App extends Component {
  render() {
    return (
      <div className='row'>
        <UseRefLoginForm />
      </div>
    );
  }
}

export default App;
