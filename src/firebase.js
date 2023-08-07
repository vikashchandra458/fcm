import { initializeApp } from "firebase/app";
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyBpDd67ng-pksBxKjKKGhZ1rXjl_Fk9NC0",
  authDomain: "xonfi-6c328.firebaseapp.com",
  projectId: "xonfi-6c328",
  storageBucket: "xonfi-6c328.appspot.com",
  messagingSenderId: "93149356759",
  appId: "1:93149356759:web:2d5e3dfdb549fedc020692",
  measurementId: "G-1ECWSCHELX"
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
