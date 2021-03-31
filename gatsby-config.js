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
        path: `${__dirname}/src/assets/images`
      }
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
        pixelId: facebook_pixel
      }
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: 0
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: true,
        // deprecated options and their defaults:
        base64Width: 20,
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-netlify`,
    `gatsby-plugin-styled-components`
  ],
  flags: {
    DEV_SSR: false
  }
}
