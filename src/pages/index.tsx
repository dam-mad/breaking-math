import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import ErrorBoundary from '../components/ErrorBoundary';
import { useFetchEpisodes } from '../hooks/commands/episodes';

// #20232a good dark gray color

const IndexPage = () => {
  // const { allAnchorEpisode } = useStaticQuery(allEpisodes);
  const all = useFetchEpisodes();
  console.log('dallin: ', all);
  return (
    <ErrorBoundary>
      <Layout>
        <SEO title="Home" />
        <h1>Hi full flow CI - staging to master (V2)</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    </ErrorBoundary>
  );
};

export default IndexPage;
