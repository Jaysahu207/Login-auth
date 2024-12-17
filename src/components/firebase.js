// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKYrO3C7FGw8hQz_Usfl3qZjm4fFUUKZk",
  authDomain: "login-auth-jay.firebaseapp.com",
  projectId: "login-auth-jay",
  storageBucket: "login-auth-jay.firebasestorage.app",
  messagingSenderId: "388082581490",
  appId: "1:388082581490:web:54aa19f2d87ef2e1faf56b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db =getFirestore(app)
export default app;
