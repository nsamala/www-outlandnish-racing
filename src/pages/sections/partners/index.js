import React from "react"

import { LeftSection } from '../../../components/section'

export default ({feature}) => (
  <LeftSection id="partners" feature={feature}>
    <h1>Partners</h1>
    <p className="subheader">I'll be working together with these partners in 2019 to make it a successful season.</p>
    <br/>
    <h4>Media</h4>
    <ul>
      <li>GoPro</li>
      <li>NVUS Images</li>
    </ul>
    <br/>
    <h4>Vehicle</h4>
    <ul>
      <li>GT Radial</li>
      <li>CounterSpace Garage</li>
      <li>Whiteline</li>
    </ul>
    <br/>
    <h4>Wanna work together?</h4>
    <p>Shoot me a message and let's chat!</p>
    <br/>
  </LeftSection>
)