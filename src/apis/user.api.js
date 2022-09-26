<<<<<<< HEAD
import axios from "axios";
import getToken from "../utils/get-token";
import { API_URI } from "../constants";

const api = axios.create({
  baseURL: `${API_URI}/users`,
  withCredentials: true,
});

api.interceptors.request.use(req => {
  const token = getToken();
  if (token) {
    req.headers.authorization = `Bearer ${token}`;
  }
  return req;
});

export const getUser = async () => {
  return api.get("/get-user");
};
=======
import axios from "axios";
import getToken from "../utils/get-token";
import { API_URI } from "../constants";

const api = axios.create({
  baseURL: `${API_URI}/users`,
  withCredentials: true,
});

api.interceptors.request.use(req => {
  const token = getToken();
  if (token) {
    req.headers.authorization = `Bearer ${token}`;
  }
  return req;
});

export const getUser = async () => {
  return api.get("/get-user");
};
>>>>>>> d67a1c2f3415f50311b16434b41f1d8f69528f23
