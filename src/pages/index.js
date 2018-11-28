import React from "react"
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'outlandnish racing' },
        { name: 'keywords', content: 'outlandnish, racing, time attack, drift, drifting' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0'}
      ]}
    />
    <Layout children={children} />
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`