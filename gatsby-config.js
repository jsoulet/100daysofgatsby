module.exports = {
  siteMetadata: {
    title: `#100DaysOfGatsby`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/content/posts`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`
  ],
}
