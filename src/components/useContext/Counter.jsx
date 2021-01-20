import React, { useReducer } from 'react';

function countReducer(state, action) {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

const Counter = () => {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
    </div>
  );
};

export default Counter;
