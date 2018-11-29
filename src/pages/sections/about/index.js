import React, { Component } from "react"
import sectionStyles from './about.module.css'

import { LeftSection } from '../../../components/section'

export default ({ feature }) => (
  <LeftSection id="about" theme="" feature={feature}>
    <h1 className='highlight-dark'>Hi, I'm Nish.</h1>
    <h4 className='highlight-dark'>And this is my BRZ.</h4>
    <br/>
    <p>I'm a 26 year old Indian-American who loves to get going fast and sideways.</p>
    <br/>
    <p>I love developing my skills and showcasing my car in all types of motorsport.</p>
    <br/>
    <p>You’ll find me at #GRIDLIFE TrackBattle, Super D: Midwest, and other awesome spots for track goodness.</p>
    <br/>
    <p>I help organize <a href="https://midwest86cup.com">Midwest 86 CUP</a>. You’ll find me competing in Street class for all the glory.</p>
    <br/>
    <p>Wanna hear more? Listen to my escapades and adventures on <a href="http://thebrakefastclub.com">the Brakefast Club</a>, which I co-host.</p>
    <br/>
    <br/>
    <h4 className='highlight-dark'>Good vibes and silly times.</h4>
  </LeftSection>
)