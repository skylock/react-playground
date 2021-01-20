import React, { useReducer } from 'react';

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Counter = ({ children }) => {
  console.log(children);

  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  console.log(state);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      {children}
    </div>
  );
};

export default Counter;
