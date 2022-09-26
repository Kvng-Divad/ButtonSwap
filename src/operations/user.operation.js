<<<<<<< HEAD
import { useMutation } from "react-query";
import { getUser } from "../apis/user.api";

export const useGetUser = () => {
  const { mutateAsync, ...result } = useMutation(getUser);

  return { getUser: mutateAsync, getUserResult: result };
};
=======
import { useMutation } from "react-query";
import { getUser } from "../apis/user.api";

export const useGetUser = () => {
  const { mutateAsync, ...result } = useMutation(getUser);

  return { getUser: mutateAsync, getUserResult: result };
};
>>>>>>> d67a1c2f3415f50311b16434b41f1d8f69528f23
