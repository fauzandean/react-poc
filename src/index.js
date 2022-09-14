import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, HashRouter,Routes, Route} from 'react-router-dom';

import App from './App';
//import reportWebVitals from './reportWebVitals'

import UserView from "./routes/UserView";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <React.StrictMode>
      <Routes> 
        <Route path="/" element={<App />} />
        <Route path="UserView/" element={<UserView /> } />
      </Routes>
    </React.StrictMode>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();