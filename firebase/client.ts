
import { initializeApp, getApp, getApps } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC98GXWwoA7fqB8WC_fOEUcjXq_e5t9oHQ",
  authDomain: "wiseprep-cd969.firebaseapp.com",
  projectId: "wiseprep-cd969",
  storageBucket: "wiseprep-cd969.firebasestorage.app",
  messagingSenderId: "509051924943",
  appId: "1:509051924943:web:0105566d0e361fdc77e2ba",
  measurementId: "G-TLFH2B9TG2"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);