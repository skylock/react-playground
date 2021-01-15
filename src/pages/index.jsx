import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const Index = () => {
  const userContext = useContext(UserContext);
  console.log('index => ', userContext.value);

  return (
    <div>
      <h2>Index</h2>
    </div>
  );
};

export default Index;
