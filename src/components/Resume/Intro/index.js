import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import ResumeIntroComponent from './Intro';

const ResumeIntro = ({ data }) => (
  <StaticQuery
    query={graphql`
      query ResumeIntroQuery {
        intro: resumeJson {
          name
          profile
          title

          contact {
            email
          }

          social {
            title
            url
          }
        }

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

      return <ResumeIntroComponent {...data} />;
    }}
  />
);

export default ResumeIntro;
