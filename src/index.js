import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/pages/SingIn';
import "./styles/global.css";
import { ToastContainer } from "react-toastify";


ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

