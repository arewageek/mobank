// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeO8IQePVaNat55y8hGtt8igSySA-PH74",
  authDomain: "mobank-438fd.firebaseapp.com",
  projectId: "mobank-438fd",
  storageBucket: "mobank-438fd.appspot.com",
  messagingSenderId: "214547299647",
  appId: "1:214547299647:web:fe63ba865c909c92e7278a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
