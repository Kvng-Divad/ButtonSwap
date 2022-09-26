import axios from "axios";

const api = axios.create({
  baseURL: `https://kezaafrica.herokuapp.com/v1/products`,
  withCredentials: true,
});

export const getSingleProduct = async id => {
  return api.get(`/get-product/${id}`);
};
