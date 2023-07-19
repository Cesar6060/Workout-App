// Import functions needed from the SDKs 
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import "firebase/database"

// Configure Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAHNeTLMvEgk4eWcFdQwbZVPsEckQxfO-0",
    authDomain: "workout-app-25019.firebaseapp.com",
    projectId: "workout-app-25019",
    storageBucket: "workout-app-25019.appspot.com",
    messagingSenderId: "1022181046752",
    appId: "1:1022181046752:web:044f3ef13c5bd66392d385",
    measurementId: "G-6543EQF3FJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase services
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);


