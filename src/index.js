import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";
import App from './App';
import { ToastContainer } from 'react-toastify';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer
      position="bottom-right"
      autoClose={1000}
    />
    <App />
  </React.StrictMode>
)
