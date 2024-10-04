// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);