import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDVOsW5cXAi3c9NXFpYVaXJFPM5KD0Mhzc",
  authDomain: "filmyverse-a4127.firebaseapp.com",
  projectId: "filmyverse-a4127",
  storageBucket: "filmyverse-a4127.appspot.com",
  messagingSenderId: "1018743737550",
  appId: "1:1018743737550:web:e05ca557ad828de7f4549f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;
