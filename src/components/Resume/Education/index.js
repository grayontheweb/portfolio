import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import ResumeEducationComponent from './Education';

const ResumeEducation = ({ data }) => (
  <StaticQuery
    query={graphql`
      query ResumeEducationQuery {
        resume: resumeJson {
          education {
            id
            schoolName
            studying
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

      return <ResumeEducationComponent {...data} />;
    }}
  />
);

export default ResumeEducation;
