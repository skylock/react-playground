import React, { useContext, useReducer } from 'react';
import { CounterContext } from './CounterContext';

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
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  const counterContext = useContext(CounterContext);

  console.log(counterContext);

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
