import React, { useState } from "react";
import Hello from "./hello";

const containerToggle = () => {
  const [showHello, setShowHello] = useState(true);

  return (
    <div>
      {showHello && <Hello />}
      <button onClick={() => setShowHello(!showHello)}>
        {showHello ? "Hide Hello" : "Show Hello"}
      </button>
    </div>
  );
};

export default containerToggle;
