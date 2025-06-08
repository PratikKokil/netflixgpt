// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Add this for auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7cEwk0NOg0Z2lRXqNP-dhd4f7k15DqMM",
  authDomain: "netflixgpt-82ebe.firebaseapp.com",
  projectId: "netflixgpt-82ebe",
  storageBucket: "netflixgpt-82ebe.firebasestorage.app",
  messagingSenderId: "509877724354",
  appId: "1:509877724354:web:6a99746324000a9d03475b",
  measurementId: "G-LHNKJNF0B9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Auth

export { auth }; // Export the auth instance to use in other files
