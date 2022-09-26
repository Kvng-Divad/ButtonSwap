import { useMutation } from "react-query";
import { getUser } from "../apis/user.api";

export const useGetUser = () => {
  const { mutateAsync, ...result } = useMutation(getUser);

  return { getUser: mutateAsync, getUserResult: result };
};
