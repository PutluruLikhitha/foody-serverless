import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "foody-serverless-ea7dd.firebaseapp.com",
  projectId: "foody-serverless-ea7dd",
  storageBucket: "foody-serverless-ea7dd.firebasestorage.app",
  messagingSenderId: "284999587744",
  appId: "1:284999587744:web:5aa026348e5538e720b6c5",
  measurementId: "G-VGMXKWM0PB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
