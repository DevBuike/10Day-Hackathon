// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-SrahXa8VL9dTrnjH4gVBRfGd7_SSchk",
  authDomain: "directrental-c5322.firebaseapp.com",
  projectId: "directrental-c5322",
  storageBucket: "directrental-c5322.firebasestorage.app",
  messagingSenderId: "586632447463",
  appId: "1:586632447463:web:4dd16a94de32123f41e942"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };