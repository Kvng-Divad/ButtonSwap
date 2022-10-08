import { useMutation } from "react-query";
import { getActions } from "../apis/action.api";

export const useGetActions = () => {
  const { mutateAsync, ...result } = useMutation(getActions);

  return { getActions: mutateAsync, getActionsResult: result };
};
