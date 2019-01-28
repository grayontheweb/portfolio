import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import HomeComponent from './Home';

const ResumeIntro = ({ data }) => (
  <StaticQuery
    query={graphql`
      query HomeQuery {
        introImage: file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 480) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      if (!data) {
        return null;
      }

      return <HomeComponent {...data} />;
    }}
  />
);

export default ResumeIntro;
