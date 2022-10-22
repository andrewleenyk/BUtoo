import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCx8VTRJ_LDsZ0lMApJq1MZhEBmSSF1h4Y",
  authDomain: "butoo-319c0.firebaseapp.com",
  projectId: "butoo-319c0",
  storageBucket: "butoo-319c0.appspot.com",
  messagingSenderId: "911917879092",
  appId: "1:911917879092:web:5f93c62faa0ef882db5f61",
  measurementId: "G-NQ4MFLPRNF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
