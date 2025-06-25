// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB46WtjkydffELY-1p2GksMovGNjUYTc9o",
  authDomain: "netflixgpt-10240.firebaseapp.com",
  projectId: "netflixgpt-10240",
  storageBucket: "netflixgpt-10240.firebasestorage.app",
  messagingSenderId: "909306240799",
  appId: "1:909306240799:web:2be554781ed10ea537da2a",
  measurementId: "G-Q1H5P5QRTY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Auth
export { auth };