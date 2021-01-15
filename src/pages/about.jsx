import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const About = () => {
  const msg = useContext(UserContext);

  console.log('about => ', msg);

  return (
    <div>
      <h2>About</h2>
      <p>{msg}</p>
    </div>
  );
};

export default About;
