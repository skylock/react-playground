import React, { useState, useEffect } from "react";

const counter = (props) => {
  const [count, setCount] = useState(props.startIndex);

  useEffect(() => {
    console.log(`useEffect ${count}`);
    document.title = `You clicked ${count} times`;
    return () => {
      console.log(`cleanup ${count}`);
    };
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default counter;
