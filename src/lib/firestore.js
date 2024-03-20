import { addDoc, collection, doc, getDocs, query } from "firebase/firestore";
import { db } from "./firebaseconfig";

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

export const fsSignup = async (name, email, country, password) => {
  try {
    const userRef = await addDoc(collection(db, "users"), {
      name,
      email,
      country,
      password,
    });

    if (userRef) {
      console.log(userRef.id);
    } else {
      console.log("Could not create user details");
    }
  } catch (e) {
    console.log(e);
  }
};
