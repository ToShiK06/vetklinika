import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Us from './components/us/Us'
import Anastasiya from './components/anastasiya/Anastasiya';
import Kostya from './components/kostya/Kostya';
import Katya from './components/katya/Katya';
import Amina from './components/amina/Amina';
import Sasha from './components/sasha/Sasha';
import Vova from './components/vova/Vova';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element ={<App />}/>
      <Route path = "Us" element ={<Us/>}/>
      <Route path = "s1" element ={<Anastasiya/>}/>
      <Route path = "s4" element ={<Kostya/>}/>
      <Route path = "s2" element ={<Katya/>}/>
      <Route path = "s3" element ={<Amina/>}/>
      <Route path = "s5" element ={<Sasha/>}/>
      <Route path = "s6" element ={<Vova/>}/>
      <Route path = "exit" element ={<Us/>}/>
      
      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

