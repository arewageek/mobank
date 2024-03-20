// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqP4EjK6n6hvcmG98NhfNrRqVLrgK6drc",
  authDomain: "mobank-78cdd.firebaseapp.com",
  projectId: "mobank-78cdd",
  storageBucket: "mobank-78cdd.appspot.com",
  messagingSenderId: "764010829568",
  appId: "1:764010829568:web:ef1977d5391461872ec5e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
