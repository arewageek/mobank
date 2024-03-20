import { collection, query, getDocs, where } from "firebase/firestore";
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
