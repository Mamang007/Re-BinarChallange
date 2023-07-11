// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAaRRs-FN0xgPBKpDtLIDsAha8CmAJMiOY",
  authDomain: "vite-project-firebase-fa475.firebaseapp.com",
  projectId: "vite-project-firebase-fa475",
  storageBucket: "vite-project-firebase-fa475.appspot.com",
  messagingSenderId: "113684269484",
  appId: "1:113684269484:web:a6fd191a6e4b00807e5209",
  measurementId: "G-245LRYC1KL",
  databaseURL: "https://vite-project-firebase-fa475-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
