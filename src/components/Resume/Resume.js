import React from 'react';

import ResumeEducation from './Education';
import ResumeExperience from './Experience';
import ResumeSkills from './Skills';
import ResumeIntro from './Intro';
import './Resume.scss';

const Resume = ({ resume, profileImage }) => {
  return (
    <div className="Resume">
      <ResumeIntro />

      <div className="Resume__container">
        <div className="Resume__col-left">
          <div className="Resume__section">
            <h3 className="Resume__heading">Education</h3>
            <ResumeEducation />
          </div>

          <div className="Resume__section">
            <h3 className="Resume__heading">Technical Skills</h3>
            <ResumeSkills />
          </div>
        </div>

        <div className="Resume__col-right">
          <div className="Resume__section">
            <h3 className="Resume__heading">Experience</h3>
            <ResumeExperience />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
