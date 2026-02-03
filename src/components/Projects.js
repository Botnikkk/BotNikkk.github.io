import React from 'react';
import { IoLogoGithub} from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";


const Projects = () => {

  const projectData = [
    {
      title: "Client Portfolio",
      img: require("./Images/Projects/cheenaMakeover.png"),
      github: "https://github.com/Botnikkk/cheena-makeover",
      link: "https://cheenamakeover.com", 
      description: "A professional portfolio website for a client, featuring responsive design, gallery showcases, and contact forms.",
      tags: ["React", "React Motion", "Sanity API"],
    },
    {
      title: "BlackJack Game",
      img: require("./Images/Projects/blackjack.png"),
      github: "https://github.com/Botnikkk/NikkksBlackJack",
      link: "https://botnikkk.github.io/NikkksBlackJack",
      description: "A classic card game built with JavaScript logic. Features interactive gameplay, score tracking, and dynamic DOM manipulation.",
      tags: ["JavaScript", "HTML/CSS", "Game Logic"],
    },
    {
      title: "XP BOT",
      img: require("./Images/Projects/bot.jpg"),
      github: "https://github.com/Botnikkk/XP-BOT",
      link: "https://discord.com/channels/@me/991053083696042034",
      description: "A Discord utility bot that manages user experience points, levels, and moderation commands using the Discord.py API.",
      tags: ["Python", "Discord.py", "SQL"],
    },
  ];

  return (
    <div id="projects" className="projects">
      <span className="section-title">My Projects</span>        
      <div className="main-container">
        <div className="grid-container">
          {projectData.map((project, index) => (
            <div key={index} className="project-card"> 
              <div className="image-container"><img src={project.img} alt={project.title} className="project-image" /></div>
              <div className="content-container">
                <div className="card-header">
                  <h3 className="project-title">
                    {project.title} 
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="external-link-icon"><FaExternalLinkAlt /></a>
                    )}
                  </h3>
                  <a href={project.github} target="_blank" rel="noreferrer" className="github-icon" title="View Code"><IoLogoGithub /></a>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="tags-container">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;