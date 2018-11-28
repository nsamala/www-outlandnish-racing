import React, { Component } from "react"
import sectionStyles from './season.module.css'

export default () => (
  <section className={['fullpage-section', 'block'].join(' ')} id="season">
    <div className='chapter-content-wrapper wrapper-black'>
      <div className='chapter-content'>
        <h1 className='highlight'>2019.</h1>
        <p className="subheader">The only duo in the Midwest to participate in <span className='highlight'>time attack + drift</span></p>
        <br/>
        <br/>
        <h4 className='highlight'>Time Attack</h4>
        <br/>
        <p>I'll be maximizing my seat time with coaching from an ex-Formula 4 driver. You'll find me doing:</p>
        <ul>
          <li>#GRIDLIFE TrackBattle</li>
          <li>Global Time Attack</li>
          <li>Test and Tune days at Autobahn Country Club</li>
        </ul>
        <br/>
        <h4 className='highlight'>Drift</h4>
        <br/>
        <p>Nailing down the drift line and increasing consistency during fun days as well as exhibitions.</p>
      </div>
    </div>
    <div className='chapter-title-wrapper'>
      <div className={['chapter-title', sectionStyles.sectionImg].join(' ')}>
      </div>
    </div>
  </section>
)