export const dev = process.env.NODE_ENV === "development";

export const API_URI = dev
  ? process.env.REACT_APP_STAGING_API_URI
  : process.env.REACT_APP_LIVE_API_URI;
