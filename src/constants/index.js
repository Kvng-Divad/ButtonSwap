<<<<<<< HEAD
export const dev = process.env.NODE_ENV === "development";

export const API_URI = dev
  ? process.env.REACT_APP_STAGING_API_URI
  : process.env.REACT_APP_LIVE_API_URI;
=======
export const dev = process.env.NODE_ENV === "development";

export const API_URI = dev
  ? process.env.REACT_APP_STAGING_API_URI
  : process.env.REACT_APP_LIVE_API_URI;
>>>>>>> d67a1c2f3415f50311b16434b41f1d8f69528f23
