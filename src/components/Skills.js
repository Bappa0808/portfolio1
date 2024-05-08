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

const Skills = () => {
  return (
    <section className="skills">
      <h1>Skills</h1>
      <div className="skills_icon">
        <img src={c} alt="c" />
        <img src={cpp} alt="cpp" />
        <img src={dsa} alt="dsa" />
        <img src={html} alt="html" />
        <img src={css} alt="css" />
        <img src={js} alt="js" />
        <img src={react} alt="react" />
        <img src={node} alt="node" />
        <img src={express} alt="express" />
        <img src={mongo} alt="mongo" />
        <img src={python} alt="python" />
        <img src={sql} alt="slq" />
        <img src={java} alt="java" />
        <img src={json} alt="json" />
        <img src={linux} alt="linux" />
      </div>

      <div className="gap"></div>

      <h2 className="h2">Experience</h2>
      <div className="Lg">
        <div className="Lg1">
          <img src={lboy} alt="lboy" />
        </div>
        <div className="intranship">
          <h3>Internship</h3>
          <p>Getting placed in Persistent Martian Program</p>
          <img src={persistent} alt="persistent" />
        </div>
        <div className="intranship2">
          <h3>Internship</h3>
          <p>AWS Cloud Virtual Internship</p>
          <img src={aws} alt="aws" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
