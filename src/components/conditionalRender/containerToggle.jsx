import React, { useState } from 'react';
import Hello from './Hello';

const ContainerToggle = () => {
  const [showHello, setShowHello] = useState(true);

  return (
    <div>
      {showHello && <Hello />}
      <button onClick={() => setShowHello(!showHello)}>
        {showHello ? 'Hide Hello' : 'Show Hello'}
      </button>
    </div>
  );
};

export default ContainerToggle;
