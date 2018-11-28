import React, { Component } from "react"
import sectionStyles from './hero.module.css';

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
    let backgroundStyle = this.state.showTA === true ? sectionStyles.heroTa : [sectionStyles.heroTa, sectionStyles.heroDrift].join(' ')
    let showDrift = this.state.showTA === false ? 'highlight' : ''
    let showTA = this.state.showTA === true ? 'highlight' : ''
    return (
      <section className={['fullpage-section', 'block', backgroundStyle].join(' ')}>
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