<<<<<<< HEAD
const getToken = () => {
  const tokenExists = localStorage.getItem("authTokenState");
  const token = tokenExists && JSON.parse(tokenExists).authTokenState;
  return token;
};

export default getToken;
=======
const getToken = () => {
  const tokenExists = localStorage.getItem("authTokenState");
  const token = tokenExists && JSON.parse(tokenExists).authTokenState;
  return token;
};

export default getToken;
>>>>>>> d67a1c2f3415f50311b16434b41f1d8f69528f23
