import React from 'react';
import { useCountState } from './CounterProvider';

const CountDisplay = () => {
  const state = useCountState();

  return <div>Count: {state.count}</div>;
};

export default CountDisplay;
