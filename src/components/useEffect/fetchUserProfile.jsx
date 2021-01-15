import { useEffect, useState } from "react";
import axios from "axios";

export const fetchUserProfile = (url) => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    console.log("mounted");
    setTimeout(() => {
      axios.get(url).then((res) => {
        const [userData] = res.data.results;
        setState({ data: userData, loading: false });
        console.log(userData);
      });
    }, 2000);

    return () => {
      console.log("unmounted");
    };
  }, []);

  return state;
};
