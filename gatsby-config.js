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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/icons.png',
        appName: '#NS Racing',
        appDescription: 'The home for Outlandnish Racing',
        developerName: 'Outlandnish',
        developerURL: 'https://racing.outlandnish.com',
        dir: 'auto',
        lang: 'en-US',
        background: '#00796b',
        theme_color: '#00796b',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        version: '1.0',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          favicons: true,
          firefox: true,
          windows: true
        }
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['rabbidHighway', 'didactGothic'],
          urls: ['src/styles/global.css']
        }
      }
    },
    `gatsby-plugin-netlify`
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
        "link": "#season"
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