import React, { Component } from 'react';
import './App.css';
import UserProfile from './components/useEffect/UserProfile';
import { LoginForm } from './components/useState/LoginForm';
class App extends Component {
  render() {
    return (
      <div className='row'>
        <div className='column'>
          {/* Using effect hook to fetch API data */ <UserProfile />}
        </div>
        <div className='column'>
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default App;
