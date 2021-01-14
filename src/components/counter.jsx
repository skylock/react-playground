import React, { useState } from "react";

const counter = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(39);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Your age is {age}</p>
      <input type="text" onChange={(e) => setAge(e.target.value)}></input>
    </div>
  );
};

export default counter;
