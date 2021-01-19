import React, { useContext } from 'react';
import { CountContext } from './count-context';

export const CountDisplay = () => {
  const { count } = useContext(CountContext);

  return <div>Count: {count}</div>;
};
