import React, { Component } from "react"
import Layout from '../components/layout'
import { checkAndFixSection } from '../common'

// sections
import Hero from './sections/hero'
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
    return (
      <Layout>
        <Hero></Hero>
        <About></About>
        <Season></Season>
        <Partners></Partners>
      </Layout>
    )
  }
}

export default Home