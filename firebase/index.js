// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5MUtYGTrvI-VfFxABicaFOt0W-2UIp_8",
  authDomain: "bonheur-fded8.firebaseapp.com",
  projectId: "bonheur-fded8",
  storageBucket: "bonheur-fded8.appspot.com",
  messagingSenderId: "540082472085",
  appId: "1:540082472085:web:646d58744c0339451e879c",
  measurementId: "G-EERQR151E7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
