import React, { Profiler } from 'react';
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
import Zapis from './components/zapis/Zapis';
import Special from './components/special/Special';
import Contacti from './components/contakti/Contacti';
import Online from './components/online/Online';
import Online2 from './components/online2/Online2';
import SignUp from './components/signUp/SignUp';
import Profile from './components/profile/Profile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element ={<App />}/>
      <Route path = "Us" element ={<Us/>}/>
      <Route path = "s1" element ={<Anastasiya/>}/>
      <Route path = "ex" element ={<Special/>}/>
      <Route path = "s4" element ={<Kostya/>}/>
      <Route path = "s2" element ={<Katya/>}/>
      <Route path = "s3" element ={<Amina/>}/>
      <Route path = "s5" element ={<Sasha/>}/>
      <Route path = "s6" element ={<Vova/>}/>
      <Route path = "exit" element ={<Us/>}/>
      <Route path = "exi" element ={<Zapis/>}/>
      <Route path = "zapis" element ={<Zapis/>}/>
      <Route path = "spec" element ={<Special/>}/>
      <Route path = "Cont" element ={<Contacti/>}/>
      <Route path = "online1" element ={<Online/>}/>
      <Route path = "online2" element ={<Online2/>}/>
      <Route path = "lk" element ={<SignUp/>}/>   
      <Route path = "Profile" element ={<Profile/>}/>  
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

