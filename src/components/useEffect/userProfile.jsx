import React, { useState, useEffect } from "react";
import axios from "axios";

const userProfile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log("mounted");
    axios.get("https://randomuser.me/api/").then((res) => {
      const [userData] = res.data.results;
      setUser(userData);
    });

    return () => {
      console.log("unmounted");
    };
  }, []);

  return (
    <div>
      User Profile
      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
};

export default userProfile;
