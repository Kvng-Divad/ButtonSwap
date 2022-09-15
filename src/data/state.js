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
