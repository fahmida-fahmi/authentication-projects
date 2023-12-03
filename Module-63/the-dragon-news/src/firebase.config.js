// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHVVz8K2GSbGbZ_smDBlKIU094Px239xk",
  authDomain: "the-dragon-news-route.firebaseapp.com",
  projectId: "the-dragon-news-route",
  storageBucket: "the-dragon-news-route.appspot.com",
  messagingSenderId: "193279067893",
  appId: "1:193279067893:web:4992d2c51a4dbdd8a367bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app