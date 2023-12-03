// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHzuxZN8ZiyLF8ttWmuHRXi0OjK6BbrfA",
  authDomain: "auth-firebase-private-route.firebaseapp.com",
  projectId: "auth-firebase-private-route",
  storageBucket: "auth-firebase-private-route.appspot.com",
  messagingSenderId: "280562148354",
  appId: "1:280562148354:web:26747a1e0391cae5a3f31b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app