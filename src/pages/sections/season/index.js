import React, { Component } from "react"

import { RightSection } from '../../../components/section'

export default ({ feature }) => (
  <RightSection id="season" theme="wrapper-black" feature={feature}>
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
  </RightSection>
)