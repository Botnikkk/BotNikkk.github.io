import React from 'react';

import javaIcon from './Images/Skills/java.svg';
import dartIcon from './Images/Skills/dart.svg';
import cIcon from './Images/Skills/c.svg';
import pythonIcon from './Images/Skills/python.svg';
import sqlIcon from './Images/Skills/sql.svg';
import htmlIcon from './Images/Skills/html.svg';
import cssIcon from './Images/Skills/css.svg';
import jsIcon from './Images/Skills/javascript.svg';

import flutterIcon from './Images/Skills/flutter.svg';
import reactIcon from './Images/Skills/react.svg';
import gitIcon from './Images/Skills/git.svg';
import androidIcon from './Images/Skills/android.svg';

const Skills = () => {
  const skills = [
    { name: "Java", img: javaIcon },
    { name: "Dart", img: dartIcon },
    { name: "C++", img: cIcon },
    { name: "Python", img: pythonIcon },
    { name: "SQL", img: sqlIcon },
    { name: "HTML", img: htmlIcon },
    { name: "CSS", img: cssIcon },
    { name: "JavaScript", img: jsIcon },
  ];
  
  const frameworks = [
    { name: "Flutter", img: flutterIcon },
    { name: "React", img: reactIcon },
    { name: "Git", img: gitIcon },
    { name: "Android", img: androidIcon },
  ];

  return (
    <div id="skillset" className="skillset">
      <span className="section-title">I'm Skilled in,</span>
      
      <div className="main-container">
        <p className="skillTitle">Languages : </p>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skillItem"> 
              <img title={skill.name} alt={skill.name} src={skill.img} />
              <span className="skillName">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="main-container">
        <p className="skillTitle">Tools & Frameworks : </p>
        <div className="skills-list">
          {frameworks.map((framework, index) => (
            <div key={index} className="skillItem"> 
              <img title={framework.name} alt={framework.name} src={framework.img} />
              <span className="skillName">{framework.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;