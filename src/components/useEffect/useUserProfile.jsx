import { useEffect, useState } from 'react';
import axios from 'axios';

export const useUserProfile = (props) => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    console.log('mounted');
    console.log('props', props);
    setState({ data: null, loading: true });
    setTimeout(() => {
      axios.get('https://randomuser.me/api/').then((res) => {
        const [userData] = res.data.results;
        setState({ data: userData, loading: false });
        console.log(userData);
      });
    }, 2000);

    return () => {
      console.log('unmounted');
    };
  }, [props]);

  return state;
};
