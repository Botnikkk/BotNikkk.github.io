import React from 'react';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="main-container">
        <img src={require('./Images/pfp.jpg')} alt="Profile" />
        <a>
        Motivated Computer Science student with hands-on
        experience in several programming languages. A proactive
        problem-solver, passionate about building quality software
        and thriving in collaborative team environments.
        </a>
      </div>
    </div>
  );
};

export default About;