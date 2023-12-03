// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnBu7ZvkHPDwQeXkDnZHjXdglK-w0iwO8",
  authDomain: "simple-firebase-4c060.firebaseapp.com",
  projectId: "simple-firebase-4c060",
  storageBucket: "simple-firebase-4c060.appspot.com",
  messagingSenderId: "179487470720",
  appId: "1:179487470720:web:db32ec5e8e7806d1622265"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}