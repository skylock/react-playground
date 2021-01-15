import React, { useState } from 'react';

export const LoginForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <div className='preference'>
        <label for='name'>Username</label>
        <input
          name='name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='preference'>
        <label for='password'>Password</label>
        <input
          name='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
  );
};
