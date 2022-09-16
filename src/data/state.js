import { atom } from "recoil";
import { implementPersist } from "../utils";

export const productsState = atom({
  key: "productsState",
  default: {
    totalCount: 0,
    numberOfPages: 0,
    list: [],
  },
});

export const singleProductState = atom({
  key: "singleProductState",
  default: {},
  effects_UNSTABLE: implementPersist("singleProductState"),
});

export const applicationState = atom({
  key: "applicationState",
  default: {
    product: {
      id: "",
      capacity: "",
      color: "",
      price: 0,
    },
    meta: {
      plan: "",
      terms: {
        tenure: 0,
        type: "",
      },
    },
    payment: {
      total: 0,
      down: 0,
      dividend: 0,
    },
    identity: {
      stored: "",
      supplied: "",
    },
    user: {
      bvn: "",
      bank: "",
      work_email: "",
      account_number: "",
      full_name: "",
      phone_number: "",
      delivery_address: "",
      password: "",
      other: {
        monthly_income: "",
        bank_branch: "",
      },
    },
  },
  // effects_UNSTABLE: implementPersist("applicationState"),
});
