import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { useUserProfile } from "./useUserProfile";

const userProfile = () => {
  const [toggle, setToggle] = useState(false);
  const { data, loading } = useUserProfile(toggle);
  console.log("data", data);
  console.log("loading", loading);
  return (
    <div>
      User Profile
      {loading ? <p>Loading ...</p> : <p>Loaded</p>}
      <button onClick={() => setToggle(!toggle)}>Get other</button>
      <div>
        {data !== null && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
      </div>
    </div>
  );
};

export default userProfile;
