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

        homeContent: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/data/home/" } }
        ) {
          edges {
            node {
              frontmatter {
                title
              }

              html
            }
          }
        }

        contact: homeJson {
          links {
            url
            title
          }
        }
      }
    `}
    render={data => {
      if (!data) {
        return null;
      }

      const homeContent = data.homeContent.edges[0].node;
      const contactLinks = data.contact.links;

      return (
        <HomeComponent
          introImage={data.introImage}
          homeContent={homeContent}
          contactLinks={contactLinks}
        />
      );
    }}
  />
);

export default ResumeIntro;
