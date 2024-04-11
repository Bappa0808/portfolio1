import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../container/NavigationBar.css';

function NavigationBar() {
return (
 <div className='Navbar__div'>
   <nav>
    <div className='title'><Link to="/" className='title'>Bappa Bera</Link></div>
    <div className='Navbar__items'>

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
    <NavLink to="downloadCv">Download CV</NavLink>

    </li>
    <li>
    <NavLink to="skills">Skills</NavLink>
    </li>
    <li>
    <NavLink to="contact">Contact me</NavLink>
    </li>
    </div>
  </nav>
 </div>

);
}
export default NavigationBar;

