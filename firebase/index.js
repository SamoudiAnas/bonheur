// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdIWOzNEBp7lYY3UrQ8rnOeKUAc0bnzyQ",
  authDomain: "bonheur-9586c.firebaseapp.com",
  projectId: "bonheur-9586c",
  storageBucket: "bonheur-9586c.appspot.com",
  messagingSenderId: "892495291747",
  appId: "1:892495291747:web:28dd6185cbf08ef8349f56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
