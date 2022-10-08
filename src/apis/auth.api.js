import axios from "axios";
import { API_URI } from "../constants";

const api = axios.create({ baseURL: `${API_URI}/auth`, withCredentials: true });

export const loginUser = async identity => {
  return api.post("/login-user", identity);
};
