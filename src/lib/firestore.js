import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "./firebaseconfig";

// check if user exist

export const fsUserExist = async (email) => {
  try {
    const userRef = doc(db, "users", {
      email: "arewageek@gmail.com",
    });

    console.log(userRef);
  } catch (e) {
    console.log(e);
  }
};
