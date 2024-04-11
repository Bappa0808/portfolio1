// components/Header.js

import React from 'react';
import '../container/header.css';
import intropic from '../assets/intropic.png';
import facebook from '../assets/facebook.webp';
import insta from '../assets/insta.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

const Header = () => {
  return (
    <header>
      <div className='header-pic'>
      
        <div className="header-text">
        
        <h2 data-text='Welcome to My Portfolio...' className='h1_header_text'>Welcome to My Portfolio...</h2>

        <div className='button'>
        <button class="learn-more">
            <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
            </span>
  <span class="button-text">Learn More</span>
        </button>
        </div>

        </div>
        <div className='intropic'>
        <img src={intropic} alt="intropic" width={450} />
      </div>
      </div>
      <div className='links'>
        <div className='fb'>
        <a href={"https://www.facebook.com/bappa.bera.71868"}><img src={facebook} alt="facebook" width={30}/></a>
        </div>
        <div>
        <a href={"https://www.instagram.com/bappa_0808/"}><img src={insta} alt="insta" width={30}/></a>
        </div>
        <div>
        <a href={"https://twitter.com/bappa_lifeline"}><img src={twitter} alt="twitter" width={30}/></a>
        </div>
        <div>
        <a href={"https://www.linkedin.com/in/bappa0808/"}><img src={linkedin} alt="linkedin" width={30}/></a>
        </div>
        <div>
        <a href={"https://github.com/Bappa0808"}><img src={github} alt="github" width={30}/></a>
        </div>
      </div>
    </header>
  );
};


export default Header;
