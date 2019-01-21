import React from 'react';

import './Skills.scss';

const ResumeSkills = ({ resume }) => (
  <ul className="ResumeSkills">
    {resume.skills.map(skill => (
      <li key={skill.id}>
        <p>
          <strong>{skill.heading}: </strong>
          {skill.items.join(', ')}
        </p>
      </li>
    ))}
  </ul>
);

export default ResumeSkills;
