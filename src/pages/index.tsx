//TODO: need to add back the ErrorBoundary
import React, { Suspense } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import ErrorBoundary from '../components/ErrorBoundary';
import { useFetchEpisodes } from '../hooks/commands/useFetchAllEpisodes';
import { useAllEpisodes } from '../hooks/commands/useAllEpisodes';

// #20232a good dark gray color

const IndexPage = () => {
  const { edges = [], totalCount = 0 } = useFetchEpisodes();
  console.log('edges: ', edges);

  return (
    <Suspense fallback={<h1>Dallin</h1>}>
      {edges.map(({ node }, i) => {
        console.log(`node: `, node.enclosure.url);
        return i < 10 ? (
          <>
            <figure key={`${node.id}-${i}`}>
              <figcaption>{node.title}:</figcaption>
              <audio preload controls src={node.enclosure.url}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </figure>
          </>
        ) : null;
      })}
    </Suspense>
  );
};

export default IndexPage;
