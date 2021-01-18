import React, { useRef } from 'react';
import { useForm } from './useForm';

export const UseRefLoginForm = () => {
  const [values, handleChange] = useForm({ email: '', password: '' });
  const inputRef = useRef();

  return (
    <div>
      <div className='preference'>
        <label htmlFor='email'>Username</label>
        <input
          ref={inputRef}
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
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Use email input #ref
      </button>
    </div>
  );
};
