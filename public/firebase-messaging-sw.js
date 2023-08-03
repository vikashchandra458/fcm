// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyD1svoHkoM1ccWJ7cDppkHCpDEBOCNNth4",
    authDomain: "v-chat-8ac16.firebaseapp.com",
    projectId: "v-chat-8ac16",
    storageBucket: "v-chat-8ac16.appspot.com",
    messagingSenderId: "514723356205",
    appId: "1:514723356205:web:246edf2ec0d37bbb5ee2a4"
  };

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});