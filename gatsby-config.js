module.exports = {
  siteMetadata: {
    title: 'JAVIA LEUNG',
    siteUrl: 'https://javialeung.github.io',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: `projects`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ["gatsby-remark-component"]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-131761988-1",
        head: true,
        anonymize: true,
        respectDNT: true
      },
    },
  ],
}
