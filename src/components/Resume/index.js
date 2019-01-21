import React from 'react';

import Content from './Content';
import Header from './Header';
import Profile from './Profile';

import './Resume.scss';

const Resume = ({ professionalExperience }) => (
  <div className="Resume">
    <Header />

    <div className="Resume__container">
      <Profile />
      <Content professionalExperience={professionalExperience} />
    </div>
  </div>
);

export default Resume;
