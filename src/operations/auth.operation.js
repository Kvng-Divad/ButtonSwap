import { useMutation } from "react-query";
import { loginUser } from "../apis/auth.api";

export const useLoginUser = () => {
  const { mutateAsync, ...result } = useMutation(loginUser);

  return { loginUser: mutateAsync, loginUserResult: result };
};
