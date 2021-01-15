import React, { useContext } from 'react';
import { login } from '../login';
import { UserContext } from '../UserContext';

const Index = () => {
  const { user, setUser } = useContext(UserContext);
  console.log('index => ', user);

  return (
    <div>
      <h2>Index</h2>
      <p>{JSON.stringify(user, null, 2)}</p>
      {user ? (
        <button onClick={() => setUser(null)}>Logout</button>
      ) : (
        <button
          type='button'
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Index;
