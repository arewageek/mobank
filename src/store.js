import { atom } from "recoil";

const userAtom = atom({
  key: "userAtom",
  default: {
    userId: null,
    user: null,
  },
});

const modalState = atom({
  key: "modalAtom",
  default: false,
});
