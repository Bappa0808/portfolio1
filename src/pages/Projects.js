import '../container/projects.css';
import music from '../assets/music.png';
import portfolio from '../assets/portfolio.png';
import watch from '../assets/watch.png';
import clg from '../assets/clg.png';
import gpt from '../assets/gpt.png';
import temp from '../assets/temp.png';

const Projects =() =>{
    return(
        
        <div className="projects__div">
            <h2>Projects</h2>
            

            <div className='Projects__element'>
                <div><img  className="myDIV" src={music} alt='music' width={50}></img></div>
                <div className='myDIV'><h3>music clone</h3> 
                </div>
                <div className='hid_e'>
                
                    <p> 
                        <ul>
                            <li>Developed an intuitive and interactive music web app for an engaging user experience.</li>
                            <li>Seamlessly integrated audio and video elements for a rich multimedia experience.</li>
                            <li> Implemented user-focused features, including playlist creation and customization, enhancing user engagement.</li>
                        </ul>
                    </p>
                    </div>
                    
                        <div>
                        <a href={"https://github.com/Bappa0808/Music-clone"}>
                        <button className='btn1'>
                        View Code</button>
                        </a>
                        </div>
                        
                        
                
            </div>
            <div className='Projects__element'>
            <div><img  className="gpt" src={gpt} alt='gpt' width={50}></img></div>
                <div className='myDIV'><h3>GPT-3</h3></div>
                <div className='hid_e'>
                <p> 
                        <ul>
                            <li>Dynamic React Website: Developed a dynamic website using React.</li>
                            <li>GPT-3 Integration: Integrated GPT-3 for intelligent content generation.</li>
                            <li>Enhanced User Interaction: Provided users with engaging and interactive content through AI-powered features.</li>
                        </ul>
                    </p>
                    </div>
                <a href={"https://github.com/Bappa0808/GPT3"}>
                        <button className='btn1'>
                        View Code</button>
                        </a>
                </div>
                
            <div className='Projects__element'>
            <div><img  className="watch" src={watch} alt='watch' width={50}></img></div>
                <div className='myDIV'><h3>stop watch</h3></div>
                <div className='hid_e'>
                <p> 
                        <ul>
                            <li>Designed a visually appealing and responsive stopwatch using HTML and CSS, ensuring seamless user experience across different devices and screen sizes.</li>
                            <li>Implemented accurate timekeeping functionality with JavaScript, showcasing your ability to work with date and time in a web application.</li>
                            <li>Added user-friendly features such as start, stop, and reset buttons, providing an intuitive and practical stopwatch tool for various timekeeping needs.</li>
                        </ul>
                    </p>


                </div>
                <a href={"https://github.com/Bappa0808/StopWatch"}>
                        <button className='btn1'>
                        View Code</button>
                        </a>
            </div>

            
           

            <div className='Projects__element'>
            <div><img  className="temp" src={temp} alt='temp' width={50}></img></div>
                <div className='myDIV'><h3>temp converter</h3></div>
                <div className='hid_e'>
                <p> 
                        <ul>
                            <li>Developed an intuitive and interactive music web app for an engaging user experience.</li>
                            <li>Seamlessly integrated audio and video elements for a rich multimedia experience.</li>
                            <li> Implemented user-focused features, including playlist creation and customization, enhancing user engagement.</li>
                        </ul>
                    </p>
                    </div>


                <a href={"https://github.com/Bappa0808/Temperature-Converter"}>
                        <button className='btn1'>
                        View Code</button>
                        </a>
            </div>
            <div className='Projects__element'>
            <div><img  className="clg" src={clg} alt='clg' width={50}></img></div>
                <div className='myDIV'><h3>college website</h3></div>
                <div className='hid_e'>


                <p> 
                        <ul>
                            <li>User-Centric Design: Designed an informative and user-friendly college website.</li>
                            <li>Mobile-Responsive: Ensured the website is accessible on mobile devices.</li>
                            <li>Interactive Elements: Included features like event calendars and contact forms for user engagement.</li>
                        </ul>
                    </p>
                </div>
                <a href={"https://github.com/Bappa0808/clg-fest"}>
                        <button className='btn1'>
                        View Code</button>
                        </a>
            </div>
            <div className='Projects__element'>
            <div><img  className="portfolio" src={portfolio} alt='portfolio' width={50}></img></div>
                <div className='myDIV'><h3>portfolio</h3></div>
                <div className='hid_e'>

                <p> 
                        <ul>
                            <li>Developed full-stack web applications, from client-side interfaces to server-side logic and databases, ensuring complete, scalable, and integrated solutions.</li>
                            <li>Expertise in a wide array of technologies, including front-end frameworks, back-end languages, and databases, enabling the delivery of diverse and complex projects.</li>
                            <li>Utilized data analysis and integration to drive informed decisions, creating web solutions that meet business objectives and user needs effectively.</li>
                        </ul>
                    </p>
                    
                </div>
                <a href={"https://github.com/Bappa0808/Music-clone"}>
                        <button className='btn1'>
                        View Code</button>
                        </a>
                </div> 
            
        </div>

    )
};
export default Projects;