import React, { useReducer } from 'react';

const reducer = (action, state) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

export const ReducerDemo = () => {
  // useReducer first arg is a function and second one is the initial state
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <div>Counter value: {count}</div>
      <button onClick={() => console.log('increment')}>Increment</button>
      <button onClick={() => console.log('decrement')}>Decrement</button>
    </div>
  );
};
