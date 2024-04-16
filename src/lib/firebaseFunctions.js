import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebaseconfig";

export const createTransaction = async ({ amount, account, desc }) => {
  try {
    const user = "303030";

    const docRef = await addDoc(collection(db, "transactions"), {
      amount: Number(amount),
      account: account,
      desc: desc,
      user: user,
      status: "pending",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    return docRef.id;
  } catch (e) {
    console.log(e);
    return null;
  }
};
