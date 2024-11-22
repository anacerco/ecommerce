
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyAOJSlDI9T1r6s9SbtEk6F5qDvBG0IdoM4",
  authDomain: "ecommerce-604a8.firebaseapp.com",
  projectId: "ecommerce-604a8",
  storageBucket: "ecommerce-604a8.firebasestorage.app",
  messagingSenderId: "1037333904998",
  appId: "1:1037333904998:web:aa17156dc52797d14f77a7",
  measurementId: "G-PYZL8DKQHN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
