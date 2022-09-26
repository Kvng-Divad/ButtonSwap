import { useMutation } from "react-query";
import { getUserApplications } from "../apis/application.api";

export const useGetUserApplications = () => {
  const { mutateAsync, ...result } = useMutation(getUserApplications);

  return {
    getUserApplications: mutateAsync,
    getUserApplicationsResult: result,
  };
};
