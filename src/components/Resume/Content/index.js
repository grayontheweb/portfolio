import React from 'react';

import './Content.scss';

const ResumeContent = ({ professionalExperience }) => (
  <div className="ResumeContent">
    <h2>Professional Experience</h2>

    <ul className="ResumeContent__professional-experience">
      {professionalExperience.map((exp, i) => (
        <li key={i}>
          <h6>{exp.title}</h6>
          <h6>
            {exp.startDate} - {exp.endDate ? exp.endDate : 'Present'}
          </h6>

          <div dangerouslySetInnerHTML={{ __html: exp.html }} />
        </li>
      ))}
    </ul>
  </div>
);

export default ResumeContent;
