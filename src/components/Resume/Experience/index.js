import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import ResumeExperienceComponent from './Experience';

const ResumeExperience = ({ data }) => (
  <StaticQuery
    query={graphql`
      query ResumeExperienceQuery {
        resume: resumeJson {
          experience {
            id
            companyName
            companyUrl
            jobBullets
            jobDescription
            jobTitle
            projects
            startDate
            endDate
          }
        }
      }
    `}
    render={data => {
      if (!data) {
        return null;
      }

      return <ResumeExperienceComponent {...data} />;
    }}
  />
);

export default ResumeExperience;
