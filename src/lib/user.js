import { collection, query, getDocs, where } from "firebase/firestore";
import { clerkClient, useClerk } from "@clerk/nextjs";

import { db } from "./firebaseconfig";

export const fsUserCards = async (user) => {
  try {
    const q = query(collection(db, "cards"));

    const cards = await getDocs(q);

    const availableCards = [];

    cards.forEach((card) => availableCards.push(card.data()));

    return availableCards[0];
  } catch (e) {
    console.log(e);
  }
};

const handleUserData = async (userId) => {
  try {
    // check if user data is available
    // const userData = await checkUserSession(userId);
    // if (!userData) {
    //   // create user profile
    //   createUserProfile(userId);
    // }

    const user = retrieveUser();
    console.log(user);
  } catch (e) {
    console.log(e);
  }
};

const checkUserSession = async (userId) => {
  try {
    const q = query(collection(db, "users"), where("userId", "==", userId));

    const userData = await getDocs(q);

    return userData.docs[0].data();
  } catch (e) {
    console.log(e);
  }
};

const createUserProfile = async (user) => {
  try {
    // create user profile
  } catch (e) {
    console.log(e);
  }
};

const retrieveUser = async () => {
  try {
    const { session } = await useClerk();
    console.log(session.user);
  } catch (e) {
    console.log(e);
  }
};
