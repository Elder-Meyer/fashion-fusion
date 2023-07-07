import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUMNEMRZucL1P7ZbZNfsUy0DyVbESJmvo",
  authDomain: "fashion-fusion-65eb8.firebaseapp.com",
  projectId: "fashion-fusion-65eb8",
  storageBucket: "fashion-fusion-65eb8.appspot.com",
  messagingSenderId: "91384609083",
  appId: "1:91384609083:web:c47e2c9c49a99e80ff9f1e",
  measurementId: "G-F8HKQ8ZSLH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
