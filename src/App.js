import React, { useState, useEffect } from 'react'
import toast, { Toaster, ToastBar } from 'react-hot-toast';
import { messaging } from "./firebase"
import { getToken, onMessage } from 'firebase/messaging';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [notification, setNotification] = useState({ title: '', body: '' });
  const [allNotification, setAllNotification] = useState([]);
  const [token, setToken] = useState("");
  const notify = () => toast(<ToastDisplay />);
  function ToastDisplay() {
    return (
      <div>
        <p><b>{notification?.title}</b></p>
        <p>{notification?.body}</p>
      </div>
    );
  };
  useEffect(() => {
    if (allNotification?.length > 0) {
      const dataAsString = JSON.stringify(allNotification);
      localStorage.setItem('myData', dataAsString);
    } else {
      const dataAsString = localStorage.getItem('myData');
      if (dataAsString) {
        setAllNotification(JSON.parse(dataAsString))
      }
    }
  }, [allNotification])

  const requestForToken = () => {
    return getToken(messaging, { vapidKey: "BDZmCvIT7pLCFuyIascXDfqELlCinl3WpomSOHEd7cQEk4u0zhSbOM2hytd2pukPqesLhsnoJ0uFtTm0Dlwcpv4" })
      .then((currentToken) => {
        if (currentToken) {
          setToken(currentToken || 'No registration token available. Request permission to generate one.')
          console.log('current token for client: ', currentToken);
          // Perform any other neccessary action with the token
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
  };

  const onMessageListener = () =>
    new Promise((resolve) => {
      onMessage(messaging, (payload) => {
        console.log("payload", payload)
        resolve(payload);
      });
    });

  useEffect(() => {
    if (notification?.title) {
      notify()
    }
  }, [notification])

  requestForToken();

  onMessageListener()
    .then((payload) => {
      setAllNotification(oldArray => [...oldArray, { title: payload?.notification?.title, body: payload?.notification?.body }]);
      setNotification({ title: payload?.notification?.title, body: payload?.notification?.body });
    })
    .catch((err) => console.log('failed: ', err));

  return (
    <>
      <Toaster>
        {(t) => (
          <ToastBar
            toast={t}
            style={{
              ...t.style,
              animation: t.visible ? 'custom-enter 1s ease' : 'custom-exit 1s ease',
            }}
          />
        )}
      </Toaster>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{ color: "red" }}>
            Your Current Token :
          </p>
          <p style={{ marginTop: -20, width: "80%", wordWrap: "break-word" }}>
            {token}
          </p>
          <p style={{ textAlign: "left", lineHeight: 0.5, color: "green" }}>
            Your Notification :
          </p>
          <div style={{ marginTop: -20, width: "80%", wordWrap: "break-word" }}>
            {allNotification.map((item, index) => (
              <div key={index} >
                <p style={{ textAlign: "left", }}>({index + 1}) {item.title}  :  {item.body}</p>
              </div>
            ))}
          </div>
        </header>
      </div>
    </>
  )
}

export default App