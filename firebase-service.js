// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBovhVR0DlWuTtVnne1SODdnH9Ik6ahkCY",
  authDomain: "commit-ai.firebaseapp.com",
  projectId: "commit-ai",
  storageBucket: "commit-ai.appspot.com",
  messagingSenderId: "713409187429",
  appId: "1:713409187429:web:b329273cbceefe601b808c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firebase auth
const auth = getAuth()


export { app, auth }
