import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { useUserProfile } from './useUserProfile';

const userProfile = () => {
  const [toggleReload, setToggle] = useState(false);
  const { data, loading } = useUserProfile(toggleReload);
  console.log('data', data);
  console.log('loading', loading);
  return (
    <div>
      User Profile
      <div style={{ margin: 10 }}>
        <button onClick={() => setToggle(!toggleReload)}>Get other</button>
      </div>
      {data === null ? (
        <div>{loading ? <p>Loading ...</p> : <p>Loaded</p>}</div>
      ) : (
        <div>
          <p>{`${data.name.first} ${data.name.last}`}</p>
          <pre>{JSON.stringify(data, undefined, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default userProfile;
