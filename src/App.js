import React, { Component } from 'react';
import './App.css';
import Counter from './components/useState/counter';
import ContainerToggle from './components/conditionalRender/containerToggle';
import DomUpdate from './components/useEffect/domUpdate';
import UserProfile from './components/useEffect/userProfile';
class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* Using effect hook to fetch API data */ <UserProfile />}
      </div>
    );
  }
}

export default App;
