// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaZrPbHfKjpSql4d2yY4MAtSHltV_TGMI",
  authDomain: "email-password-auth-5f13c.firebaseapp.com",
  projectId: "email-password-auth-5f13c",
  storageBucket: "email-password-auth-5f13c.appspot.com",
  messagingSenderId: "435249558400",
  appId: "1:435249558400:web:8906dce8f99a05f3e84765"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app