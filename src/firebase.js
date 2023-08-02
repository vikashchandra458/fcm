import { initializeApp } from "firebase/app";
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyD1svoHkoM1ccWJ7cDppkHCpDEBOCNNth4",
  authDomain: "v-chat-8ac16.firebaseapp.com",
  projectId: "v-chat-8ac16",
  storageBucket: "v-chat-8ac16.appspot.com",
  messagingSenderId: "514723356205",
  appId: "1:514723356205:web:246edf2ec0d37bbb5ee2a4"
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
