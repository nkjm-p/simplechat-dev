import firebase from "firebase/app";
import "firebase/auth";  // Authentication用
import "firebase/firestore";  // Firestore用

const firebaseConfig = {
  apiKey: "AIzaSyBFz7M5oHcjob2wn5DDFH4Ws7AX2grSP0Y",
  authDomain: "simplechat-dev-ea08d.firebaseapp.com",
  projectId: "simplechat-dev-ea08d",
  storageBucket: "simplechat-dev-ea08d.firebasestorage.app",
  messagingSenderId: "551011567798",
  appId: "1:551011567798:web:46f2d451d7fc766fe4be17",
  measurementId: "G-BQW7FERNM8"
};

// Firebase初期化
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebaseApp;
