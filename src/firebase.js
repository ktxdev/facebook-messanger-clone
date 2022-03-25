// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD4Jdz39oGWpTA-SfdLNxrXBoLCp61jUrM",
  authDomain: "fb-messanger-clone-bdca8.firebaseapp.com",
  projectId: "fb-messanger-clone-bdca8",
  storageBucket: "fb-messanger-clone-bdca8.appspot.com",
  messagingSenderId: "384698213784",
  appId: "1:384698213784:web:452bf506a63bfb7b25b7ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db; 

