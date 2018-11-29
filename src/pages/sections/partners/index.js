import React from "react"

import { LeftSection } from '../../../components/section'

export default ({feature}) => (
  <LeftSection id="partners" theme="" feature={feature}>
    <h1 className='highlight-dark'>Partners</h1>
    <p className="subheader">I'll be working together with these partners in 2019 to make it a successful season.</p>
    <br/>
    <h4 className='highlight-dark'>Media</h4>
    <ul>
      <li>GoPro</li>
      <li>NVUS Images</li>
    </ul>
    <br/>
    <h4 className='highlight-dark'>Vehicle</h4>
    <ul>
      <li>GT Radial</li>
      <li>CounterSpace Garage</li>
      <li>Whiteline</li>
    </ul>
    <br/>
    <h4 className='highlight-dark'>Wanna work together?</h4>
    <p>Shoot me a message and let's chat!</p>
    <br/>
  </LeftSection>
)