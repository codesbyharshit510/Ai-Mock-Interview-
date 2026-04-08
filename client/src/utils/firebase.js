
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-mock-interview-8c16c.firebaseapp.com",
  projectId: "ai-mock-interview-8c16c",
  storageBucket: "ai-mock-interview-8c16c.firebasestorage.app",
  messagingSenderId: "81613282460",
  appId: "1:81613282460:web:59258d22fa537a71716159",
  measurementId: "G-F7RVS4Y1CX"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}