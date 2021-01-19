import React, { useContext } from 'react';
import { CountStateContext } from './count-context';

const CountDisplay = () => {
  const { count } = useContext(CountStateContext);

  return <div>Count: {count}</div>;
};

export default CountDisplay;
