import {initializeApp} from 'firebase/app';
import { getAuth } from "firebase/auth";
// import "firebase/firestore";  // Firestore用

//// const(instance) ////

// Firebase SDKの関数をv9モジュール方式でインポート
const firebaseConfig = {
  apiKey: "AIzaSyBFz7M5oHcjob2wn5DDFH4Ws7AX2grSP0Y",
  authDomain: "simplechat-dev-ea08d.firebaseapp.com",
  projectId: "simplechat-dev-ea08d",
  storageBucket: "simplechat-dev-ea08d.firebasestorage.app",
  messagingSenderId: "551011567798",
  appId: "1:551011567798:web:46f2d451d7fc766fe4be17",
  measurementId: "G-BQW7FERNM8"
};

// Firebaseアプリの初期化
const firebaseApp = initializeApp(firebaseConfig);

// authインスタンス化
const auth = getAuth(firebaseApp)



//// export ////

// auth
export {auth};

