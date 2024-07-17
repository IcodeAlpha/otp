// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDstE04nAZ971Ibh8TDYEe-7Ed4xe-Z7Dg",
  authDomain: "otp-auth-6f1ad.firebaseapp.com",
  projectId: "otp-auth-6f1ad",
  storageBucket: "otp-auth-6f1ad.appspot.com",
  messagingSenderId: "868975851289",
  appId: "1:868975851289:web:07b1a419b9e8c913fb7788",
  measurementId: "G-HNVXR5NG52"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
auth.useDeviceLanguage();

export { auth };