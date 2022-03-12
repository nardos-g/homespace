import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZSut4yAz7DtLJA2uYPk63kAqwO5qy2NI",
  authDomain: "homespace-project.firebaseapp.com",
  projectId: "homespace-project",
  storageBucket: "homespace-project.appspot.com",
  messagingSenderId: "962782427282",
  appId: "1:962782427282:web:1a7bda14971e7bd57bce4b",
  measurementId: "G-NZW8ZMDTVK"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore() 