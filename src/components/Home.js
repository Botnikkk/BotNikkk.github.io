import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import linkedinIcon from './Images/Socials/linkedin.svg';
import gmailIcon from './Images/Socials/gmail.svg';
import githubIcon from './Images/Socials/github.svg';
import driveIcon from './Images/Socials/drive.svg';

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["programmer.", "student.", "learner."],
      typeSpeed: 200,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="home" className="home">
      <div className="main-container">
        <a>Hello! I'm</a>
        <a className="name">Nikhil Chaudhary</a>
        <a>A <span className="auto-type" ref={el}></span></a>
      </div>

      <p className="social-text">Get in touch 👇</p>
      <div className="socials">
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nikhil-chaudhary-85a275269" className="social">
            <img src={linkedinIcon} alt="LinkedIn" />
            <span>LinkedIn</span>
        </a>
        <a target="_blank" rel="noreferrer" href="mailto:b.nikk.chd@gmail.com?subject=Connect from Portfolio!" className="social">
            <img src={gmailIcon} alt="Gmail" />
            <span>Mail</span>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/Botnikkk" className="social">
            <img src={githubIcon} alt="Github" />
            <span>Github</span>
        </a>
        <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1V2KO4CrylBIMpUEPP-ntxJzj09akL8P6/view?usp=sharing" className="social">
            <img src={driveIcon} alt="Resume" />
            <span>Resume</span>
        </a>
      </div>
    </div>
  );
};

export default Home;