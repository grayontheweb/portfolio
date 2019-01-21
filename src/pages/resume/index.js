import React, { Fragment } from 'react';
import { get } from 'lodash-es';
import { graphql } from 'gatsby';

import Resume from '../../components/Resume';

const ResumePage = ({ data }) => {
  const professionalExperience = get(data, 'professionalExperience.edges', [])
    .map(e => ({
      endDate: get(e, 'node.frontmatter.endDate'),
      html: get(e, 'node.html', ''),
      startDate: get(e, 'node.frontmatter.startDate'),
      title: get(e, 'node.frontmatter.title', ''),
    }))
    .sort((a, b) => {
      if (a.startDate < b.startDate) return 1;
      if (a.startDate > b.startDate) return -1;
      return 0;
    });

  return (
    <Fragment>
      <Resume professionalExperience={professionalExperience} />
    </Fragment>
  );
};

export const query = graphql`
  query {
    professionalExperience: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/professional-experience/" } }
    ) {
      edges {
        node {
          frontmatter {
            startDate
            endDate
            title
          }

          html
        }
      }
    }
  }
`;

export default ResumePage;
