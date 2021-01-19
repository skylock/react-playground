import React, { useContext } from 'react';
import { CountStateContext } from './count-context';

export const CountDisplay = () => {
  const { count } = useContext(CountStateContext);

  return <div>Count: {count}</div>;
};
