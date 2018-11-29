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
import sectionStyles from './../components/section.module.css'

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
    let avatarStyle = {
      position: 'absolute'
    }
    let avatarImage = (<Img fixed={data.avatarImage.childImageSharp.fixed} fadeIn={true} className={sectionStyles.sectionAvatar} style={avatarStyle} />)
    let aboutImage = (<Img fluid={data.aboutImage.childImageSharp.fluid} fadeIn={true} className={sectionStyles.sectionFeatureImage} />)
    let seasonImage = (<Img fluid={data.seasonImage.childImageSharp.fluid} fadeIn={true} className={sectionStyles.sectionFeatureImage} />)
    let partnersFeature = (<div className={sectionStyles.sectionFeatureBlank}></div>)
    return (
      <Layout>
        <HeroWrapper></HeroWrapper>
        <About feature={aboutImage} avatar={avatarImage}></About>
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
    avatarImage: file(relativePath: { eq: "avatar.jpg"}) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    aboutImage: file(relativePath: { eq: "section-about.jpg" }) {
      ...featureImage
    }
    seasonImage: file(relativePath: { eq: "section-season.jpg" }) {
      ...featureImage
    }
  }
`