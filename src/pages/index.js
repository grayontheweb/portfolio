import React from 'react';

import Resume from '../components/Resume';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Resume - Gray Sutherland" />
    <Resume />
  </Layout>
);

export default IndexPage;
