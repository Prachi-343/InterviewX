// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration (replace with your config)
const firebaseConfig = {
  apiKey: "AIzaSyDn9Gm6ct54sjBvYuW6IkJswhliqzufsS0",
  authDomain: "interviewx-89f00.firebaseapp.com",
  projectId: "interviewx-89f00",
  storageBucket: "interviewx-89f00.appspot.com",
  messagingSenderId: "1059417515792",
  appId: "1:1059417515792:web:6a69ffe363057e2a25a795",
  measurementId: "G-KS5DGJN973"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage };
