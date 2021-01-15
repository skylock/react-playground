import React, { Component } from 'react';
import './App.css';
import { LoginForm } from './components/useState/LoginForm';
class App extends Component {
  render() {
    return (
      <div className='row'>
        <LoginForm />
      </div>
    );
  }
}

export default App;
