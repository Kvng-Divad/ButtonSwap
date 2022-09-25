const getToken = () => {
  const tokenExists = localStorage.getItem("authTokenState");
  const token = tokenExists && JSON.parse(tokenExists).authTokenState;
  return token;
};

export default getToken;
