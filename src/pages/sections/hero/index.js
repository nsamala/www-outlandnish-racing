import React, { Component } from "react"
import sectionStyles from './hero.module.css';
import Img from "gatsby-image"

class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = { showTA: true }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.toggleActive.bind(this), 5000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  toggleActive() {
    this.setState({ showTA: !this.state.showTA })
  }

  render() {
    let showDrift = this.state.showTA === false ? 'highlight' : ''
    let showTA = this.state.showTA === true ? 'highlight' : ''
    
    let taImageStyle = this.state.showTA === true ? sectionStyles.heroImageWrapper : [sectionStyles.heroImageWrapper, sectionStyles.heroImageWrapperHidden].join(' ')
    let driftImageStyle = this.state.showTA === false ? sectionStyles.heroImageWrapper : [sectionStyles.heroImageWrapper, sectionStyles.heroImageWrapperHidden].join(' ')
    let absolutePosition = { position: 'absolute' }

    return (
      <section className={['fullpage-section', 'block'].join(' ')}>
        <Img fluid={this.props.taImage.childImageSharp.fluid} fadeIn={true} className={taImageStyle} style={absolutePosition} />
        <Img fluid={this.props.driftImage.childImageSharp.fluid} fadeIn={true} className={driftImageStyle} style={absolutePosition} />
        <div className={sectionStyles.heroText}>
          <h2>One Derp<span className="highlight">.</span> One Car<span className="highlight">.</span></h2>
          <h3>Two Disciplines<span className="highlight">.</span></h3>
        </div>
        <div className={sectionStyles.heroBottom}>
          <h4><span className={showTA}>Time Attack</span> + <span className={showDrift}>Drift</span><span className="highlight">.</span></h4>
        </div>
      </section>
    )
  }
}

export default Hero