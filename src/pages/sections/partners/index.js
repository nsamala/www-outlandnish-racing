import React from "react"
import sectionStyles from './partners.module.css'

export default () => (
  <section className={['fullpage-section', 'block'].join(' ')} id="partners">
    <div className='chapter-title-wrapper'>
      <div className={['chapter-title', sectionStyles.sectionImg].join(' ')}>
      </div>
    </div>
    <div className='chapter-content-wrapper wrapper-dark'>
      <div className='chapter-content'>
        <h1 className='highlight'>Partners</h1>
        <p className="subheader">I'll be working together with these partners in 2019 to make it a successful season.</p>
        <br/>
        <h4 className='highlight'>Media</h4>
        <ul>
          <li>GoPro</li>
          <li>NVUS Images</li>
        </ul>
        <br/>
        <h4 className='highlight'>Vehicle</h4>
        <ul>
          <li>GT Radial</li>
          <li>CounterSpace Garage</li>
          <li>Whiteline</li>
        </ul>
        <br/>
        <br/>
        <h4 className='highlight'>Wanna Work Together?</h4>
        <p>Shoot me a message and let's chat!</p>
        <br/>
      </div>
    </div>
  </section>
)