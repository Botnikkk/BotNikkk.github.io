import React from 'react';

const Skills = () => {
  // We require the images inside the data array
  const skills = [
    { name: "Flutter", img: require("./Images/flutter.png") },
    { name: "Java", img: require("./Images/java.png") },
    { name: "Dart", img: require("./Images/dart.png") },
    { name: "Python", img: require("./Images/python.png") },
    { name: "HTML", img: require("./Images/html.png") },
    { name: "CSS", img: require("./Images/css.png") },
    { name: "JavaScript", img: require("./Images/js.png") },
    { name: "SQL", img: require("./Images/sql.png") },
  ];

  return (
    <div id="skillset" className="skillset">
      <span className="section-title">I'm Skilled in,</span>
      <div className="main-container">
        {skills.map((skill, index) => (
          <img key={index} title={skill.name} alt={skill.name} src={skill.img}/>
        ))}
      </div>
    </div>
  );
};

export default Skills;