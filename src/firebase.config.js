// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFfmIHickMVeJGDg_7LJvttQBNhz18m1E",
  authDomain: "task-management-client-fffce.firebaseapp.com",
  projectId: "task-management-client-fffce",
  storageBucket: "task-management-client-fffce.appspot.com",
  messagingSenderId: "254900884261",
  appId: "1:254900884261:web:794327864846be2624c0cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;