import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"

//Components
import App from './App';
import UserList from './components/User/UserList';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from "./components/About";
import UserProfile from "./components/UserProfile"
import NotFound from "./components/NotFound"

import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar></Navbar>
    <div className='container my-3'>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/userprofile' element={<UserProfile/>} />
        <Route path='/users' element={<UserList/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  </BrowserRouter>
);
