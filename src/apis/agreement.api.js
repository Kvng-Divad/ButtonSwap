import axios from "axios";
import getToken from "../utils/get-token";
import { API_URI } from "../constants";

const api = axios.create({
  baseURL: `${API_URI}/agreements`,
  withCredentials: true,
});

api.interceptors.request.use(req => {
  const token = getToken();
  if (token) {
    req.headers.authorization = `Bearer ${token}`;
  }
  return req;
});

export const createAgreement = async agreement => {
  return api.post("/create-agreement", agreement, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
