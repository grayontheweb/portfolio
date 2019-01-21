import React from 'react';
import Img from 'gatsby-image';

import './Intro.scss';

const ResumeIntro = ({ intro, introImage }) => (
  <div className="ResumeIntro">
    <div className="ResumeIntro__image">
      <Img fluid={introImage.childImageSharp.fluid} />
    </div>

    <div className="ResumeIntro__content">
      <h1 className="ResumeIntro__name">{intro.name}</h1>
      <h2 className="ResumeIntro__title">{intro.title}</h2>

      <p className="ResumeIntro__profile">{intro.profile}</p>

      <div className="print-only">
        <p>{intro.contact.email}</p>
      </div>

      <div className="ResumeIntro__contact no-print">
        <p>
          Contact me:
          <ul>
            <li>
              <a href={`mailto:${intro.contact.email}`}>Email</a>
            </li>

            {intro.social.map((social, index) => (
              <li key={index}>
                <a href={social.url}>{social.title}</a>
              </li>
            ))}
          </ul>
        </p>
      </div>
    </div>
  </div>
);

export default ResumeIntro;
