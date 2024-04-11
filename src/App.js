// App.js

import React from 'react';
import { BrowserRouter as Router, Switch, Links, Route, Routes, BrowserRouter } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import './App.css';
import Navbar from './components/NavigationBar';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Education from './components/Education';
import Skills from './components/Skills';

import Contact from './components/Contact';
import Join from './components/Join';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './pages/Projects';
import About from "./components/About";
import DownloadCv from './components/DownloadCv';




function App() {
  
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/about' element ={<About/>} />
        <Route path='/projects' element ={<Projects/>} />
        <Route path='/downloadCv' element ={<DownloadCv/>} />
        <Route path='/skills' element ={<Skills/>} />
        <Route path='/contact' element ={<Contact/>} />
      </Routes>
      <Header />
      <Introduction />
      <Education/>
      <br></br>
      <Skills/>
      <br></br>
      <Projects/>
      <Join />
      <Footer />
    </div>
  );
}

export default App;

