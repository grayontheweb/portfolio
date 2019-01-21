import React from 'react';

import './Education.scss';

const ResumeEducation = ({ resume }) => (
  <ul className="ResumeEducation">
    {resume.education.map(edu => (
      <li key={edu.id}>
        <h4 className="ResumeEducation__school">{edu.schoolName}</h4>
        <p>
          {edu.startDate} - {edu.endDate}
        </p>
        <p>{edu.studying}</p>
      </li>
    ))}
  </ul>
);

export default ResumeEducation;
