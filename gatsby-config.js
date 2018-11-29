module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
  siteMetadata: {
    title: `Outlandnish Racing`,
    "menuLinks": [
      {
        "name": "About",
        "link": "#about"
      },
      {
        "name": "2019 Season",
        "link": "#sesason"
      },
      {
        "name": "Partners",
        "link": "#partners"
      },
      {
        "name": "Media",
        "link": "#media"
      },
      {
        "name": "Updates",
        "link": "/updates"
      }
    ]
  }
}