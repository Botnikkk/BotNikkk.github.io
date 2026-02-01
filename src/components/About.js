import React from 'react';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="main-container">
        <img src={require('./Images/pfp.jpg')} alt="Profile" />
        <a>
          I'm a first-year Engineering student honing my programming skills through 
          coursework and hands-on projects. I combine technical expertise with 
          innovative thinking to create effective, meaningful solutions.
        </a>
      </div>
    </div>
  );
};

export default About;