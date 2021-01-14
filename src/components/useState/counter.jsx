import React, { useState, useEffect } from "react";

const counter = (props) => {
  const [count, setCount] = useState(props.startIndex);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default counter;
