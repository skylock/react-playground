import React, { useState } from "react";
import Hello from "./hello";

const getButtonText = (showHello) => {
  return showHello ? "Hide Hello" : "Show Hello";
};

const conditionalRender = () => {
  const [showHello, setShowHello] = useState(true);

  return (
    <div>
      {showHello && <Hello />}
      <button onClick={() => setShowHello(!showHello)}>
        {getButtonText(showHello)}
      </button>
    </div>
  );
};

export default conditionalRender;
