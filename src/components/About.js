import React from 'react';
import { IoSchool, IoLocation } from 'react-icons/io5';
import { profile } from '../data';

const About = () => (
  <section id="about" className="about section">
    <div className="container">
      <h2 className="section-title">About</h2>

      <div className="about-grid">
        <div className="about-text">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {/* personalNote is optional, empty = skipped */}
          {profile.personalNote && <p>{profile.personalNote}</p>}
        </div>

        {/* small facts list beside the text */}
        <ul className="facts">
          <li>
            <IoSchool aria-hidden="true" />
            <div>
              <strong>{profile.education}</strong>
              <span>
                {profile.college} · {profile.years}
              </span>
            </div>
          </li>
          <li>
            <IoLocation aria-hidden="true" />
            <div>
              <strong>{profile.location}</strong>
              <span>Based in</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default About;
