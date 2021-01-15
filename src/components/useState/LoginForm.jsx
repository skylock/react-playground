import React from 'react';
import { useForm } from './useForm';

export const LoginForm = () => {
  const [values, handleChange] = useForm({ email: '', password: '' });

  console.log('v', values);

  return (
    <div>
      <div className='preference'>
        <label htmlFor='email'>Username</label>
        <input
          name='email'
          type='text'
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <div className='preference'>
        <label htmlFor='password'>Password</label>
        <input
          name='password'
          type='password'
          value={values.password}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
