export const login = async (delayInMs) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        id: 4,
        username: 'jim',
        email: 'jim@email.ro',
      });
    }, delayInMs)
  );
