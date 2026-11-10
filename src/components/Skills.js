import React from 'react';
import { skillGroups } from '../data';

const Skills = () => (
  <section id="skillset" className="skillset section">
    <div className="container">
      <h2 className="section-title">Skills</h2>

      <div className="skill-rows">
        {skillGroups.map((group) => (
          <div key={group.title} className="skill-row">
            <h3 className="skillTitle">{group.title}</h3>
            <ul className="skills-list">
              {group.items.map((skill) => (
                <li key={skill.name} className="skillItem">
                  <img src={skill.img} alt="" width="28" height="28" loading="lazy" />
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
