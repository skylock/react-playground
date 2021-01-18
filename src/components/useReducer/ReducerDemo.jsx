import React, { useReducer } from 'react';

// a reducer is a function that receives
// the initial state and the action to be performed on that state
const reducer = (state, action) => {
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
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};
