import React, { useState } from 'react';

export const ReducerDemo = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>Counter value: {counter}</div>
      <button onClick={() => setCounter((c) => c + 1)}>Increment</button>
      <button onClick={() => setCounter((c) => c - 1)}>Decrement</button>
    </div>
  );
};
