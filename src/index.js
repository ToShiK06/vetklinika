import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Us from './components/us/Us'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element ={<App />}/>
      <Route path = "Us" element ={<Us/>}/>
      
      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

