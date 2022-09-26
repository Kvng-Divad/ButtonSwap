<<<<<<< HEAD
import { useMutation } from "react-query";
import { getUserApplications } from "../apis/application.api";

export const useGetUserApplications = () => {
  const { mutateAsync, ...result } = useMutation(getUserApplications);

  return {
    getUserApplications: mutateAsync,
    getUserApplicationsResult: result,
  };
};
=======
import { useMutation } from "react-query";
import { getUserApplications } from "../apis/application.api";

export const useGetUserApplications = () => {
  const { mutateAsync, ...result } = useMutation(getUserApplications);

  return {
    getUserApplications: mutateAsync,
    getUserApplicationsResult: result,
  };
};
>>>>>>> d67a1c2f3415f50311b16434b41f1d8f69528f23
