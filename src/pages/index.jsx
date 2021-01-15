import React, { useContext } from 'react';
import { login } from '../login';
import { UserContext } from '../UserContext';

const Index = () => {
  const { value, setValue } = useContext(UserContext);
  console.log('index => ', value);

  return (
    <div>
      <h2>Index</h2>
      <p>{JSON.stringify(value, null, 2)}</p>
      <button
        type='button'
        onClick={async () => {
          const user = await login();
          setValue(user);
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Index;
