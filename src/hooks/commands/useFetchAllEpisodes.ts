import { useStaticQuery, graphql } from 'gatsby';

export const useFetchEpisodes = () => {
  const { allAnchorEpisode } = useStaticQuery(graphql`
    query {
      allAnchorEpisode {
        edges {
          node {
            content
            contentSnippet
            creator
            enclosure {
              length
              type
              url
            }
            dc_creator
            id
            isoDate(fromNow: true)
            link
            pubDate
            title
            guid
            itunes {
              duration
              explicit
              image
              season
              summary
              episode
            }
          }
        }
        totalCount
      }
    }
  `);

  return allAnchorEpisode;
};
