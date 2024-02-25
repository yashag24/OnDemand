// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBER9bd0oqDJS5HANl6bzLCQWG0x8orqYo",
  authDomain: "on-demand-73257.firebaseapp.com",
  projectId: "on-demand-73257",
  storageBucket: "on-demand-73257.appspot.com",
  messagingSenderId: "411369790681",
  appId: "1:411369790681:web:1e19c0d8a60036540c32c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}