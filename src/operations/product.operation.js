import { useMutation } from "react-query";
import { getSingleProduct } from "../apis/product.api";

export const useGetSingleProduct = () => {
  const { mutateAsync, ...result } = useMutation(getSingleProduct);

  return { getSingleProduct: mutateAsync, getSingleProductResult: result };
};
