import React from "react";
import '../container/skills.css';
import c from '../assets/c.png';
import cpp from '../assets/cpp.png';
import css from '../assets/css.png';
import dsa from '../assets/dsa.png';
import express from '../assets/express.png';
import js from '../assets/js.png';
import mongo from '../assets/mongo.jpg';
import node from '../assets/node.png';
import python from '../assets/python.png';
import react from '../assets/react.jpg';
import html from '../assets/html.jpg';
import lboy from '../assets/lboy.png';
import persistent from '../assets/persistent.jpg';
import aws from '../assets/aws.webp';
import java from '../assets/java.png';
import json from '../assets/json.jpg';
import linux from '../assets/linux.png';
import sql from '../assets/sql.png';






 const Skills =() => {
    return (
        <section className="skills">
            <h1>Skills</h1>
            <div className="skills_icon">
            <img src={c} alt="c" />
            <img src={cpp} alt="cpp" width={40}/>
            <img src={dsa} alt="dsa" width={57}/>
            <img src={html} alt="html" width={50}/>
            <img src={css} alt="css" width={40}/>
            <img src={js} alt="js" width={40}/>
            <img src={react} alt="react"width={50}/>
            <img src={node} alt="node" width={50} />
            <img src={express} alt="express" width={50}/>
            <img src={mongo} alt="mongo"width={50}/>
            <img src={python} alt="python"width={50}/>
            <img src={sql} alt="slq" width={50}/>
            <img src={java} alt="java" width={50}/>
            <img src={json} alt="json" width={50}/>
            <img src={linux} alt="linux" width={50}/>
            


            </div>

            <div className="gap"></div>
           
           <h2 className="h2">experience</h2>
           <div className="Lg">
            <div>
            <img src={lboy} alt="lboy"width={350}/>

            </div>
            <div className="intranship">
                <h3>internship</h3>
                <p>getting palced in Persistent martian program</p>
                <img src={persistent} alt="persistent"width={305}/>
            
           </div>
           <div className="intranship2">
                <h3>internship</h3>
                <p>AWS cloud virtual intrenship</p>
                <img src={aws} alt="aws"width={280}/>
            
           </div>
           </div>
        </section>
    )
 }

    export default Skills;