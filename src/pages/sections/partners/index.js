import React from "react"

import { LeftSection } from '../../../components/section'

export default ({feature}) => (
  <LeftSection id="partners" feature={feature}>
    <h1 className="highlight">Partners</h1>
    <p className="subheader">I'll be working together with these partners in 2019 to make it a successful season.</p>
    <br/>
    <h4 className="highlight">Media</h4>
    <ul>
      <li>GoPro</li>
      <li>NVUS Images</li>
    </ul>
    <br/>
    <h4 className="highlight">Vehicle</h4>
    <ul>
      <li>GT Radial</li>
      <li>CounterSpace Garage</li>
      <li>Whiteline</li>
    </ul>
    <br/>
    <h4 className="highlight">Wanna work together?</h4>
    <p>Shoot me a message and let's chat!</p>
    <br/>
  </LeftSection>
)