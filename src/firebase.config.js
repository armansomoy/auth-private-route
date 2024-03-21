// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_oERNJncTpMoJOoF8Pvkk3DZqf7TthW4",
  authDomain: "auth-private-route-15073.firebaseapp.com",
  projectId: "auth-private-route-15073",
  storageBucket: "auth-private-route-15073.appspot.com",
  messagingSenderId: "1020259604518",
  appId: "1:1020259604518:web:424718dd3002de78c0aee7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
