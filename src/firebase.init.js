
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnNLeML4KYF8UiLfvwdF6ZneYFbED-hZg",
  authDomain: "find-teacher-ceab9.firebaseapp.com",
  projectId: "find-teacher-ceab9",
  storageBucket: "find-teacher-ceab9.appspot.com",
  messagingSenderId: "899607371484",
  appId: "1:899607371484:web:4f18177aed1595e7551e19",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
