import React from "react"

export const LeftSection = ({children, id, theme, feature}) => (
  <section className={['fullpage-section', 'block'].join(' ')} id={id}>
    <div className='section-feature-wrapper'>
      <div className='section-feature'>
        {feature}
      </div>
    </div>
    <div className={['section-content-wrapper', theme].join(' ')}>
      <div className={'section-content'}>
        {children}
      </div>
    </div>
  </section>
)

export const RightSection = ({children, id, theme, feature}) => (
  <section className={['fullpage-section', 'block'].join(' ')} id={id}>
    <div className={['section-content-wrapper', theme].join(' ')}>
      <div className={'section-content'}>
        {children}
      </div>
    </div>
    <div className='section-feature-wrapper'>
      <div className='section-feature'>
        {feature}
      </div>
    </div>
  </section>
)