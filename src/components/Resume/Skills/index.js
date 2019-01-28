import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import ResumeSkillsComponent from './Skills';

const ResumeSkills = () => (
  <StaticQuery
    query={graphql`
      query ResumeSkillsQuery {
        resume: resumeJson {
          skills {
            id
            heading
            items
          }
        }
      }
    `}
    render={data => {
      if (!data) {
        return null;
      }

      return <ResumeSkillsComponent {...data} />;
    }}
  />
);

export default ResumeSkills;
