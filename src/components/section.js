import React from "react"

export const LeftSection = ({children, id, feature, divider}) => (
  <section className={['fullpage-section', 'block'].join(' ')} id={id}>
    <div className='section-feature-wrapper'>
      <div className='section-feature'>
        {feature}
      </div>
    </div>
    {divider}
    <div className='section-content-wrapper'>
      <div className={'section-content'}>
        {children}
      </div>
    </div>
  </section>
)

export const RightSection = ({children, id, feature, divider}) => (
  <section className={['fullpage-section', 'block'].join(' ')} id={id}>
    <div className='section-content-wrapper'>
      <div className={'section-content'}>
        {children}
      </div>
    </div>
    {divider}
    <div className='section-feature-wrapper'>
      <div className='section-feature'>
        {feature}
      </div>
    </div>
  </section>
)