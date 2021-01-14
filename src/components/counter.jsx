import React, { useState, useEffect } from "react";
import Hello from "./hello";

const counter = (props) => {
  const [count, setCount] = useState(props.startIndex);
  const [showHello, setShowHello] = useState(true);

  useEffect(() => {
    // console.log(`render ${count}`);
    document.title = `You clicked ${count} times`;
    return () => {
      // console.log(`cleanup ${count}`);
    };
  });

  return (
    <div>
      {showHello && <Hello />}
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setShowHello(!showHello)}>
        {showHello ? "Hide Hello" : "Show Hello"}
      </button>
    </div>
  );
};

export default counter;
