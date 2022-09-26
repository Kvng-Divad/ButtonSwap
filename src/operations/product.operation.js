<<<<<<< HEAD
import { useMutation } from "react-query";
import { getSingleProduct } from "../apis/product.api";

export const useGetSingleProduct = () => {
  const { mutateAsync, ...result } = useMutation(getSingleProduct);

  return { getSingleProduct: mutateAsync, getSingleProductResult: result };
};
=======
import { useMutation } from "react-query";
import { getSingleProduct } from "../apis/product.api";

export const useGetSingleProduct = () => {
  const { mutateAsync, ...result } = useMutation(getSingleProduct);

  return { getSingleProduct: mutateAsync, getSingleProductResult: result };
};
>>>>>>> d67a1c2f3415f50311b16434b41f1d8f69528f23
