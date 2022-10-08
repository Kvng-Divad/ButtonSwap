import { useMutation } from "react-query";
import { createAgreement } from "../apis/agreement.api";

export const useCreateAgreement = () => {
  const { mutateAsync, ...result } = useMutation(createAgreement);

  return { createAgreement: mutateAsync, createAgreementResult: result };
};
