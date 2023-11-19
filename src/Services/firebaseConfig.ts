import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBT2JSosFuHdSej4xOf_B037JFf8zJqRYw",
  authDomain: "react-typescript-pokedex.firebaseapp.com",
  projectId: "react-typescript-pokedex",
  storageBucket: "react-typescript-pokedex.appspot.com",
  messagingSenderId: "70367046739",
  appId: "1:70367046739:web:6c64d7f071c7e5981b6aa6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireAuth = getAuth(app);
