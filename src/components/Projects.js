import React, { useEffect, useState } from 'react';
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

// how many columns the project grid gets
// phones = 1 (css turns it into a swipe row), tablet = 2
// desktop = 3 if the project count divides by 3, else 2. that way 4 projects
// make a 2x2 and not a 3 + 1 with one card sitting alone
const getColumns = (count) => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return 2;
  if (window.matchMedia('(max-width: 600px)').matches) return 1;
  if (window.matchMedia('(max-width: 900px)').matches) return 2;
  return count % 3 === 0 ? 3 : 2;
};

// re-checks on resize so it follows the window
const useColumns = (count) => {
  const [cols, setCols] = useState(() => getColumns(count));
  useEffect(() => {
    const update = () => setCols(getColumns(count));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [count]);
  return cols;
};

const Projects = () => {
  const cols = useColumns(projects.length);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        {/* big card for the main project, comes from featuredProject in data.js */}
        <Reveal className="featured">
          <div className="featured-media">
            <img src={f.img} alt={`${f.title} app screenshots`} width="900" height="812" loading="lazy" />
          </div>
          <div className="featured-body">
            <span className="badge">Featured project</span>
            <h3 className="project-title">{f.title}</h3>
            <p className="tagline">{f.tagline}</p>

            <p className="summary">{f.summary}</p>
            {/* hardPart is optional, '' hides it */}
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

        {/* only shows on phones */}
        <p className="swipe-hint" aria-hidden="true">
          Swipe for more projects →
        </p>

        {/* the rest of the projects, one card each from the projects array */}
        <div className={`grid-container cols-${cols}`}>
          {projects.map((p, i) => {
            // 2 cols + odd number of projects = last one has no partner.
            // it takes the whole row and the css flips it to image-left / text-right
            // so the image doesnt get stretched
            const isWide = cols === 2 && projects.length % 2 === 1 && i === projects.length - 1;

            return (
              <Reveal
                key={p.title}
                className={`project-card${isWide ? ' wide' : ''}`}
                delay={i * 80}
              >
                <div className="image-container">
                  <img
                    src={p.img}
                    alt={`${p.title} screenshot`}
                    className="project-image"
                    width="900"
                    height="650"
                    loading="lazy"
                    style={p.imgPosition ? { objectPosition: p.imgPosition } : undefined}
                  />
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
