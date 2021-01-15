import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './pages/index';
import About from './pages/about';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <mav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </mav>

        <Route path='/' exact component={Index}></Route>
        <Route path='/about' component={About}></Route>
      </div>
    </Router>
  );
};

export default AppRouter;
