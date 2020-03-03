module.exports = {
  siteMetadata: {
    title: `Oppenheim Architecture + Design`,
    description: `Award winning, internationally recognized architecture firm.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    // `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `UA-YOUR-ANALYTICS-ID`
    //   }
    // },
    // {
    //   resolve: `gatsby-plugin-robots-txt`,
    //   options: {
    //     host: `https://yourdomain.com/`,
    //     sitemap: `https://yourdomain.com/sitemap.xml`,
    //     policy: [{ userAgent: `*`, allow: `/` }],
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
