// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgLF__x-Sx7moblshNfvBS2gn3Dfn1IGQ",
  authDomain: "ai-trip-planner-5eae8.firebaseapp.com",
  projectId: "ai-trip-planner-5eae8",
  storageBucket: "ai-trip-planner-5eae8.firebasestorage.app",
  messagingSenderId: "308878146416",
  appId: "1:308878146416:web:86edc9d4e0542f935c6db5",
  measurementId: "G-DLQSKVHHXG",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
