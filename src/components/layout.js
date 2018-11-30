import React from "react"
import Header from './header'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import layoutStyles from './layout.module.css'

export default ({ children }) => (
  <StaticQuery
    query={
      graphql`
        query {
          site {
            siteMetadata {
              title
              menuLinks {
                name
                link
              }
            }
          }
        }
      `
    }
    render={data => (
      <div>
        <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'outlandnish racing' },
              { name: 'keywords', content: 'outlandnish, racing, time attack, drift, drifting' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1.0'}
            ]}
        >
          <html lang="en" />
        </Helmet>
        <div id={layoutStyles.siteWrapper}>
          <Header menuLinks={data.site.siteMetadata.menuLinks} />
          {children}
        </div>
      </div>
    )}
  />
)