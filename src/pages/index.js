import React, { Component } from "react"
import Layout from '../components/layout'
import { checkAndFixSection } from '../utils'
import { graphql } from "gatsby"
import Img from "gatsby-image"

// sections
import HeroWrapper from './sections/hero'
import About from './sections/about'
import Season from './sections/season'
import Partners from './sections/partners'

let scrolling = false

class Home extends Component {

  componentDidMount() {
    this.scrolling = false
    document.onscroll = this.flagScrolling

    var aboutFixed = false,
      seasonFixed = false,
      partnersFixed = false

    setInterval(() => {
      if (scrolling === true) {
        aboutFixed = checkAndFixSection('about', 'left', aboutFixed)
        seasonFixed = checkAndFixSection('season', 'right', seasonFixed)
        partnersFixed = checkAndFixSection('partners', 'left', partnersFixed)
      }
    }, 100)
  }

  flagScrolling() {
    scrolling = true
  }

  render() {
    let data = this.props.data
    let partnersStyle = {
      backgroundColor: "#fff",
      height: "100vh"
    }
    let aboutImage = (<Img fluid={data.aboutImage.childImageSharp.fluid} />)
    let seasonImage = (<Img fluid={data.seasonImage.childImageSharp.fluid} />)
    let partnersFeature = (<div style={partnersStyle}></div>)
    return (
      <Layout>
        <HeroWrapper></HeroWrapper>
        <About feature={aboutImage}></About>
        <Season feature={seasonImage}></Season>
        <Partners feature={partnersFeature}></Partners>
      </Layout>
    )
  }
}

export default Home



export const featureImage = graphql`
fragment featureImage on File {
  childImageSharp {
    fluid(maxWidth: 811) {
      ...GatsbyImageSharpFluid
    }
  }
}
`

export const pageQuery = graphql`
  query {
    
    aboutImage: file(relativePath: { eq: "section-about.jpg" }) {
      ...featureImage
    }
    seasonImage: file(relativePath: { eq: "section-season.jpg" }) {
      ...featureImage
    }
  }
`