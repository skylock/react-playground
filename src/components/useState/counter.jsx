import React, { useState } from 'react';

const Counter = (props) => {
  const [count, setCount] = useState(props.startIndex);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
