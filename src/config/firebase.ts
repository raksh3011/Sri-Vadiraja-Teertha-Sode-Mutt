// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa23kVlC0gHF4Tc607MDHuRjk8LAW8Hy4",
  authDomain: "sode-mutt-app.firebaseapp.com",
  projectId: "sode-mutt-app",
  storageBucket: "sode-mutt-app.firebasestorage.app",
  messagingSenderId: "392144653860",
  appId: "1:392144653860:web:1f4c215e95d79fd627d2b1",
  measurementId: "G-DDETJY43VL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);