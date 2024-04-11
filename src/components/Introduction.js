import React from 'react';
import '../container/introduction.css';
import firstI from '../assets/firstI.png';

const Introduction = () => {
  return (
    <section className="intro">
      <div className='introduction_part'>
        <div className='introduction_part_pic'>
        <img src={firstI} alt="introduction-pic" width={500} />

        </div>
        <div className='introtext'>
      <h2>Hiii there</h2>
      <p>This is Bappa Bera,
         a passionate and driven
         professional with a diverse 
         background and a commitment
          to excellence. With expertise
          in computer science,I possess
          a keen eye for detail, creative
          problem-solving skills, and a
          strong drive for personal and 
          professional growth. Ready to
          make a lasting impact in their
           industry.</p>
      
      </div>
      </div>
    </section>
  );
};
export default Introduction;