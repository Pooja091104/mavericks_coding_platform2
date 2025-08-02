import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ======== Replace placeholders with your actual Firebase values ========
const firebaseConfig = {
  apiKey: "AIzaSyB5kHuMEn7GUYo7A9EQyTQtrnSqyRwf_Ug",
  authDomain: "mavericks-backend-db.firebaseapp.com",
  projectId: "mavericks-backend-db",
  storageBucket: "mavericks-backend-db.firebasestorage.app",
  messagingSenderId: "1013479559433",
  appId: "1:1013479559433:web:d0f03a3bb09b1307a443d8",
  measurementId: "G-CBDKWB0279",
};

// ======== Initialize Firebase only if not already initialized ========
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
