import React from 'react';
import { IoLogoGithub } from 'react-icons/io5';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { featuredProject as f, projects } from '../data';
import Reveal from './Reveal';

const Tags = ({ tags }) => (
  <ul className="tags-container">
    {tags.map((tag) => (
      <li key={tag} className="tech-tag">
        {tag}
      </li>
    ))}
  </ul>
);

const Projects = () => (
  <section id="projects" className="projects section">
    <div className="container">
      <h2 className="section-title">Projects</h2>

      <Reveal className="featured">
        <div className="featured-media">
          <img src={f.img} alt={`${f.title} app screenshots`} width="900" height="812" loading="lazy" />
        </div>
        <div className="featured-body">
          <span className="badge">Featured project</span>
          <h3 className="project-title">{f.title}</h3>
          <p className="tagline">{f.tagline}</p>

          <p className="summary">{f.summary}</p>
          {f.hardPart && (
            <p className="project-note">
              <strong>The hard part:</strong> {f.hardPart}
            </p>
          )}

          <Tags tags={f.tags} />

          <div className="cta-row">
            <a className="btn btn-primary" href={f.link} target="_blank" rel="noreferrer">
              {f.linkLabel} <FaExternalLinkAlt aria-hidden="true" />
            </a>
            <a className="btn btn-ghost" href={f.github} target="_blank" rel="noreferrer">
              <IoLogoGithub aria-hidden="true" /> Source code
            </a>
          </div>
        </div>
      </Reveal>

      <p className="swipe-hint" aria-hidden="true">
        Swipe for more projects →
      </p>

      <div className="grid-container">
        {projects.map((p, i) => (
          <Reveal key={p.title} className="project-card" delay={i * 80}>
            <div className="image-container">
              <img src={p.img} alt={`${p.title} screenshot`} className="project-image" width="900" height="650" loading="lazy" />
            </div>
            <div className="content-container">
              <span className="kind">{p.kind}</span>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-description">{p.description}</p>
              {p.hardPart && (
                <p className="project-note">
                  <strong>The hard part:</strong> {p.hardPart}
                </p>
              )}
              <Tags tags={p.tags} />
              <div className="card-links">
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt aria-hidden="true" /> Live
                  </a>
                )}
                <a href={p.github} target="_blank" rel="noreferrer">
                  <IoLogoGithub aria-hidden="true" /> Code
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
