import React from 'react';
import NavigationBar from './NavigationBar';
import About from '../components/About'
import Content from '../components/Contact'
import Coverpage from '../components/Coverpage'
import DownloadCv from '../components/DownloadCv'
import Education from '../components/Education'
import Projects from '../pages/Projects'
import Skills from '../components/Skills'
import Header from '../components/Header';
import Introduction from './Introduction';
import Footer  from './Footer';


function Home() {
return (
<div>
    <Header/>
    <Introduction/>
    <Education/>
    <Skills/>
    <Projects/>
    <About/>
    <Footer/>
</div>
)
}
export default Home;