module.exports = {
  siteMetadata: {
    title: `#100DaysOfGatsby`,
    description: `To kick off the year 2020, I'm joining the #100DaysOfGatsby Challenge. This blog will document my journey.`,
    author: `@johansoulet`,
    siteUrl: 'https://100daysofgatsby2020.netlify.com'
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
    {
      resolve: "gatsby-plugin-tinacms",
      options: {
        sidebar: {
          hidden: process.env.NODE_ENV === "production",
          position: "displace",
        },
        plugins: ["gatsby-tinacms-git", "gatsby-tinacms-remark"],
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`
  ],
}
