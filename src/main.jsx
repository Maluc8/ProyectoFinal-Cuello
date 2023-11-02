import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDR02waiDHxavj7tVRiHQ1NmYLJZkYfZ1E",
  authDomain: "react-coderhouse-cuello.firebaseapp.com",
  projectId: "react-coderhouse-cuello",
  storageBucket: "react-coderhouse-cuello.appspot.com",
  messagingSenderId: "942825879981",
  appId: "1:942825879981:web:dc358889c2f4c665944924",
  measurementId: "G-64YLTYP2PS"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
