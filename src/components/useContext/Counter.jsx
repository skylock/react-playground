import React from 'react';
import { useCountDispatch } from './CounterProvider';

const Counter = () => {
  const dispatch = useCountDispatch();

  return (
    <React.Fragment>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </React.Fragment>
  );
};

export default Counter;
