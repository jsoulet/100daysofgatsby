module.exports = {
  siteMetadata: {
    title: `#100DaysOfGatsby`,
    description: `To kick off the year 2020, I'm joining the #100DaysOfGatsby Challenge. This blog will document my journey.`,
    author: `@johansoulet`,
    siteUrl: 'https://100daysofgatsby.johansoulet.fr'
  },
  plugins: [
    `gatsby-plugin-typescript`,
    'gatsby-plugin-typescript-checker',
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
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          
          
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              showLineNumbers: true,
              noInlineHighlight: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 680,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/icon.png`,
        name: `100 Days of Gatsby, by @johansoulet`,
        short_name: `#100DaysOfGatsby`,
        start_url: `/`,
        background_color: `#F7FAFC`,
        theme_color: `#38B2AC`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/`, `/blog/*`],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`
  ],
}
