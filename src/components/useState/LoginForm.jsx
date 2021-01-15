import React, { useState } from 'react';

export const LoginForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
};
