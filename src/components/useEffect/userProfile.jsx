import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

const userProfile = () => {
  const [user, setUser] = useState({});
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log("mounted");
    axios.get("https://randomuser.me/api/").then((res) => {
      const [userData] = res.data.results;
      setUser(userData);
      console.log(userData);
    });

    return () => {
      console.log("unmounted");
    };
  }, [toggle]);

  return (
    <div>
      User Profile
      {user.name && (
        <p>
          {user.name.first} {user.name.last}
        </p>
      )}
      <button onClick={() => setToggle(!toggle)}>Get other</button>
      <div>
        <pre>{JSON.stringify(user, undefined, 2)}</pre>
      </div>
    </div>
  );
};

export default userProfile;
