import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const About = () => {
  const userContext = useContext(UserContext);

  console.log('about => ', userContext.value);

  return (
    <div>
      <h2>About</h2>

      <input
        type='text'
        placeholder='Set new context'
        onChange={(e) => userContext.setValue(e.target.value)}
      />
      <p>{userContext.value}</p>
    </div>
  );
};

export default About;
