import React from 'react';
import '../container/about.css';
import python_ibm from '../assets/python_ibm.png'
import  google from '../assets/google.jpeg'
import microsoft from '../assets/microsoft.png'
function About() {
return(
    <section>
        <div className='about__me'>
        <h2> This is Bappa Bera</h2>
    <p>Hello, I'm <strong>Bappa Bera </strong>, a final year student pursuing a Bachelor of Technology (B.Tech) in Computer Science. I'm passionate about technology and have been on a journey of exploration and learning throughout my academic journey.

My educational background has equipped me with a strong foundation in computer science, where I've delved into various aspects of software development, data structures, algorithms, and more. I've had the privilege of working on a range of exciting projects, both individually and in collaboration with my peers, honing my problem-solving skills and expanding my knowledge.

As I approach the culmination of my undergraduate studies, I'm excited to leverage my academic experiences and technical skills to contribute to the ever-evolving world of technology. I'm particularly interested in software development, web technologies, and data science.

My passion for learning and drive for excellence have motivated me to continually explore new technologies and keep up with industry trends. I'm eager to embark on a fulfilling career in the tech industry and make a positive impact through innovation and creativity.

Feel free to explore my portfolio to get a glimpse of my projects and skills. If you're interested in collaboration or have any inquiries, don't hesitate to get in touch.

</p>
        </div>
        <h2 className='certificate1'>certificate</h2>
        <div className='certificate'>
            
            <div className='achivments'>
            <img src={google} width={160} alt="google" />
            <p>
            Completed by Bappa Bera
March 28, 2023

3 hours (approximately)

Bappa Bera's account is verified. Coursera certifies their successful completion of Preparing for Your Professional Cloud Security Engineer Journey
            </p>
            
            </div>
            <div className='achivments'>
            <img src={python_ibm} width={160} alt="python_ibm" />
            <p>
            Data Analysis Using Python
Issued by IBM
This badge earner understands the essential steps necessary to analyze data in Python using multi-dimensional arrays, manipulating DataFrames in pandas, using SciPy library of mathematical routines and performing machine learning using scikit-learn. This includes hands-on demonstration using Jupyter notebook in JupyterLab Python tools.
            </p>
            </div>
            <div className='achivments'>
            <img src={microsoft} width={160} alt="microsoft" />
            <p>
            This certificate is presented to:

Bappa Bera

In recognition of your attendance and completion of the Microsoft Learn
Student Ambassadors Cloud Skill Challenge on
Microsoft Azure Fundamentals Challenge.

Host & Co-Host:
RISHAV KUCHIYA & PARVI GUPTA
Microsoft Learn Student Ambassadors
            </p>
            </div>
            
            
        </div>

    </section>
);
    
}
export default About;
