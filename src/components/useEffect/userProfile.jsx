import React, { useState, useEffect } from "react";
import axios from "axios";

const userProfile = () => {
  const [user, setUser] = useState({});

  useEffect(async () => {
    const res = await axios.get("https://randomuser.me/api/");
    const [user] = res.data.results;
    setUser(user);
  }, []);

  return (
    <div>
      User Profile
      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
};

export default userProfile;
