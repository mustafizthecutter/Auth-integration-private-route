// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcV2CZGg6NgV8Ho9wH1F4pfqe1c6Dt5nQ",
  authDomain: "auth-combination-69077.firebaseapp.com",
  projectId: "auth-combination-69077",
  storageBucket: "auth-combination-69077.appspot.com",
  messagingSenderId: "782633550254",
  appId: "1:782633550254:web:f3deb31d98a4778792c83f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;