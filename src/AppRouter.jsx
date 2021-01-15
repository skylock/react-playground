import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './pages/index';
import About from './pages/about';
import { UserContext } from './UserContext';

const AppRouter = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={{ user, setUser }}>
          <Route path='/' exact component={Index}></Route>
          <Route path='/about' component={About}></Route>
        </UserContext.Provider>
      </div>
    </Router>
  );
};

export default AppRouter;
