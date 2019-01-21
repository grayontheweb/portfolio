import React from 'react';

import './Experience.scss';

const ResumeExperience = ({ resume }) => (
  <ul className="ResumeExperience">
    {resume.experience.map(exp => (
      <li key={exp.id} className="ResumeExperience__item">
        <h6 className="ResumeExperience__dates">
          ({exp.startDate} - {exp.endDate ? exp.endDate : 'Present'})
        </h6>

        <h4 className="ResumeExperience__jobTitle">{exp.jobTitle}</h4>

        <h5 className="ResumeExperience__companyName">
          {exp.companyUrl ? (
            <a href={exp.companyUrl}>{exp.companyName}</a>
          ) : (
            exp.companyName
          )}
        </h5>

        <p className="ResumeExperience__jobDescription">{exp.jobDescription}</p>

        <ul className="ResumeExperience__jobBullets">
          {exp.jobBullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>

        {exp.projects.length > 0 && (
          <p>
            <strong>Previous clients include: </strong>
            {exp.projects.join(', ')}
          </p>
        )}
      </li>
    ))}
  </ul>
);

export default ResumeExperience;
