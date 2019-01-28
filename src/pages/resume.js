import React from 'react';

import Resume from '../components/Resume';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const ResumePage = () => (
  <Layout>
    <SEO title="Resume - Gray Sutherland" />
    <Resume />
  </Layout>
);

export default ResumePage;
