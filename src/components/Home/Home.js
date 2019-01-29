import React from 'react';
import Img from 'gatsby-image';

import './Home.scss';

const Home = ({ contactLinks, homeContent, introImage }) => (
  <div className="Home">
    <div className="Home__left-col">
      <div className="Home__header">
        <div className="Home__image">
          <Img fluid={introImage.childImageSharp.fluid} />
        </div>
      </div>

      <div className="Home__links">
        <ul>
          {contactLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} rel="noopener noreferrer" target="_blank">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="Home__right-col">
      <div className="Home__content">
        <h1 className="Home__title">{homeContent.frontmatter.title}</h1>

        <div
          className="Home__info"
          dangerouslySetInnerHTML={{ __html: homeContent.html }}
        />

        <div className="Home__contact">
          <form className="Home__form" method="POST" data-netlify="true">
            <h3>Get in Touch:</h3>

            <div className="Home__form__row">
              <label htmlFor="subject">
                Subject
                <input name="subject" type="text" />
              </label>
            </div>

            <div className="Home__form__row">
              <label htmlFor="body">
                Body
                <textarea name="body" />
              </label>
            </div>

            <div className="Home__form__row">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
