import React from 'react';
import { IoDocumentText, IoArrowDown } from 'react-icons/io5';
import { profile } from '../data';
import pfp from '../images/pfp.webp';

const Home = () => (
  <section id="home" className="home section">
    <div className="container hero">
      <div className="hero-text">
        <p className="status">
          <span className="status-dot" aria-hidden="true" />
          {profile.availability}
        </p>
        <h1 className="name">{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="lead">{profile.headline}</p>

        <div className="cta-row">
          <a className="btn btn-primary" href="#projects">
            View my work <IoArrowDown aria-hidden="true" />
          </a>
          <a className="btn btn-ghost" href={profile.resume} target="_blank" rel="noreferrer">
            <IoDocumentText aria-hidden="true" /> Resume
          </a>
        </div>
      </div>

      <div className="hero-photo">
        <img src={pfp} alt={`Portrait of ${profile.name}`} width="640" height="640" />
      </div>
    </div>
  </section>
);

export default Home;