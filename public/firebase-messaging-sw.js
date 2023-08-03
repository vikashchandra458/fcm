// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBpDd67ng-pksBxKjKKGhZ1rXjl_Fk9NC0",
  authDomain: "xonfi-6c328.firebaseapp.com",
  projectId: "xonfi-6c328",
  storageBucket: "xonfi-6c328.appspot.com",
  messagingSenderId: "93149356759",
  appId: "1:93149356759:web:2d5e3dfdb549fedc020692",
  measurementId: "G-1ECWSCHELX"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});