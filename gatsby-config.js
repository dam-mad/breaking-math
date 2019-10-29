module.exports = {
  siteMetadata: {
    title: 'Breaking Math Podcast',
    description: 'Official Breaking Math Podcast site.',
    author: '@kdabug & @dallin_r'
  },
  plugins: [
    'gatsby-plugin-preact',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sentry',
      // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
      options: {
        dsn: 'https://d5edc8a14409479a8ac96bfac26599eb@sentry.io/1778294',
        environment: process.env.NODE_ENV,
        enabled: (() => ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)()
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        mode: 'static',
        production: true,
        openAnalyzer: process.env.NODE_ENV !== 'production',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
