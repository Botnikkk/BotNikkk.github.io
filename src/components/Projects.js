import React from 'react';
import { IoLogoGithub } from "react-icons/io5";

const Projects = () => {
  
  const projectData = [
    {
      title: "BlackJack game",
      img: require("./Images/blackjack.png"),
      github: "https://github.com/Botnikkk/NikkksBlackJack",
      link: "https://botnikkk.github.io/NikkksBlackJack",
      actionText: "PLAY",
      className: "proj1" 
    },
    {
      title: "XP BOT",
      img: require("./Images/bot.jpg"),
      github: "https://github.com/Botnikkk/XP-BOT",
      link: "https://discord.com/channels/@me/991053083696042034",
      actionText: "VIEW BOT",
      className: "proj2"
    },
    {
      title: "Client Portfolio",
      img: require("./Images/cheenaMakeover.png"),
      github: "https://github.com/Botnikkk/cheena-makeover",
      link: "https://cheenamakeover.com", 
      actionText: "VIEW WEBSITE",
      className: "proj3"
    },
    {
      title: "Hangman Game",
      img: require("./Images/hangman.jpg"),
      github: "https://github.com/Botnikkk/hangman-game",
      link: null,
      actionText: null,
      className: "proj4"
    },
    {
      title: "Banking System",
      img: require("./Images/bank.jpg"),
      github: "https://github.com/Botnikkk/banking-system",
      link: null,
      actionText: null,
      className: "proj5"
    }
  ];

  return (
    <div id="projects" className="projects">
      <div className="main-container">
        <span className="section-title">My Work,</span>
        
        <div className="grid-container">
          {projectData.map((project, index) => (
            <div key={index} className={`image-wrapper ${project.className}`}>
              <img src={project.img} className="item" alt={project.title} />
              <div className='overlay'>
                <div className="overlay-namebox">
                  <p className="overlay-text">{project.title}</p>
                  <a title="View on Github" className="icon" href={project.github} target="_blank" rel="noreferrer">
                    <IoLogoGithub />
                  </a>
                </div>
                {project.link && (
                  <a title={project.actionText} className="button" href={project.link} target="_blank" rel="noreferrer">
                    {project.actionText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;