import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const About = () => {
  const userContext = useContext(UserContext);

  console.log('about => ', userContext.value);

  return (
    <div>
      <h2>About</h2>
      <p>{JSON.stringify(userContext.value, null, 2)}</p>
    </div>
  );
};

export default About;
