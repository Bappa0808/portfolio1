import React from 'react';
import '../container/education.css';
import clgPic from '../assets/clgPic.jpeg';
import HighSchool  from'../assets/HighSchool.jpg';

const Education = () => {
  return (
    <section className="education">
        <div className='clg_education'>
        <div className='myDIV'><h2>College Education</h2>
        <img src={clgPic} alt="clgPic" width={450} />
        <h2>Abacus Institute of Engineering and Management (AIEM)</h2>
        </div>
        <div className='hide'>
        
          <p>
        </p>
        <h3>Depertment:- Computer Science & Engineering
          University Roll No :- 24000120002 <br></br>
          CGPA:- 9
        </h3>
        </div>
        </div>
        <div className='xii_education'>
        <div className='myDIV'><h2>12 th Education</h2>
        <img src={HighSchool} alt='schoolpic' width={450}/>
        <h2>Lowada High School(H.S)</h2>
        </div>
        <div className='hide'><p>
        
                88 % marks
        </p></div>
        </div>
        <div className='x_education'>
        <div className='myDIV'>
          <h2>10th Education</h2>
          <img src={HighSchool} alt='schoolpic' width={450}/>
          <h2>Lowada High School(H.S)</h2>
          </div>
            <div className='hide'><p>
                
                89 % marks
            </p></div>
  
        </div>
      
    </section>
  );
};
export default Education;