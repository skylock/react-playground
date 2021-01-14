import React, { useState, useEffect } from "react";

const usingEffect = (props) => {
  const [count, setCount] = useState(props.startIndex);

  const getButtonText = (showHello) => {
    return showHello ? "Hide Hello" : "Show Hello";
  };
  useEffect(() => {
    // console.log(`render ${count}`);
    document.title = `You clicked ${count} times`;
    return () => {
      // console.log(`cleanup ${count}`);
    };
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default usingEffect;
