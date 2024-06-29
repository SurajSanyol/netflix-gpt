// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY ,
  authDomain: "netflix-gpt-76326.firebaseapp.com",
  projectId: "netflix-gpt-76326",
  storageBucket: "netflix-gpt-76326.appspot.com",
  messagingSenderId: "933503763313",
  appId: "1:933503763313:web:87585f4df7853be4d16cd0",
  measurementId: "G-VCQF7RNX9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();