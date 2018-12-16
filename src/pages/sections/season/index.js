import React from "react"

import { RightSection } from '../../../components/section'

export default ({ feature }) => (
  <RightSection id="season" feature={feature}>
    <h1 className='highlight'>2019.</h1>
    <p className="subheader">The only duo in the Midwest to participate in <span className='highlight'>time attack + drift</span></p>
    <br/>
    <br/>
    <h4 className='highlight'>Time Attack</h4>
    <br/>
    <p>I'll be maximizing my seat time with coaching from open wheel drivers.. You'll find me doing:</p>
    <ul>
      <li>#GRIDLIFE TrackBattle</li>
      <li>Global Time Attack</li>
      <li>Test and Tune days at Autobahn Country Club</li>
    </ul>
    <br/>
    <h4 className='highlight'>Drift</h4>
    <br/>
    <p>Coaching is once again the main priority. I'll be working on nailing down the drift line and increasing consistency during fun days as well as exhibitions.</p>
  </RightSection>
)