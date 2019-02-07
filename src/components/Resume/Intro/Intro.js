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
    </div>
  </div>
);

export default ResumeIntro;
