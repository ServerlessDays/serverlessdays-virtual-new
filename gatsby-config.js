let facebook_pixel = ''
let gtm = '1234'

module.exports = {
  siteMetadata: {
    title: `ServerlessDays Virtual`,
    description: `ServerlessDays goes Virtual! Join us as we take ServerlessDays online so you can enjoy it from wherever you may be!`,
    author: `ServerlessDays Virtual`,
    siteUrl: `https://virtual.serverlessdays.io/`,
    email: 'info@serverlessdays.io'

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: gtm,
        includeInDevelopment: false
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: facebook_pixel,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: './src/assets/images/favicon.ico'
      },
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: 0
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-netlify`,
    `gatsby-plugin-styled-components`
  ],
}
