import React, { useContext } from 'react';
import { login } from '../login';
import { UserContext } from '../UserContext';
import '../App.css';

const Index = () => {
  const { user, setUser } = useContext(UserContext);
  console.log('index => ', user);

  return (
    <div className='row'>
      <div className='column'>
        <h2>Index</h2>
        {user ? (
          <pre>{JSON.stringify(user, null, 2)}</pre>
        ) : (
          <p>anonymous user</p>
        )}

        {user ? (
          <button onClick={() => setUser(null)}>Logout</button>
        ) : (
          <button
            type='button'
            onClick={async () => {
              const user = await login(2000);
              setUser(user);
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Index;
