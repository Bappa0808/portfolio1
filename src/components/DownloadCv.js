import React from 'react';
import '../container/downloadCv.css';
import resume from '../assets/resume.jpg';


const DownloadCv = () => {
  return (
    <section className="DownloadCv">
      
      
      <div className='resume'>
        <img src={resume} alt='resume' width={700}></img>


      </div>
      <button className='btn1'>Download</button>
    </section>
  );
};

export default DownloadCv;