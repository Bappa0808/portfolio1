import React, { useState } from 'react';
import { Link, NavLink, Routes, Route } from 'react-router-dom';
import '../container/NavigationBar.css';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact'; // Changed Content to Contact for consistency
import Coverpage from '../components/Coverpage';
import DownloadCv from '../components/DownloadCv';
import Education from '../components/Education';
import Projects from '../pages/Projects';
import Skills from '../components/Skills';

function NavigationBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='Navbar__div'>
      <nav>
        <div className='title'><Link to="/" className='title'>Bappa Bera</Link></div>
        <button className='menu-toggle' onClick={toggleMenu}>
          Menu
        </button>
        <div className={`Navbar__items ${showMenu ? 'show-menu' : ''}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About me</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/downloadCv">Download CV</NavLink>
            </li>
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact me</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/downloadCv" element={<DownloadCv />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default NavigationBar;
