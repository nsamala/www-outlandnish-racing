import React from "react"

export const LeftSection = ({children, id, theme, feature}) => (
  <section className={['fullpage-section', 'block'].join(' ')} id={id}>
    <div className='chapter-title-wrapper'>
      <div className='chapter-title'>
        {feature}
      </div>
    </div>
    <div className={['chapter-content-wrapper', theme].join(' ')}>
      <div className={'chapter-content'}>
        {children}
      </div>
    </div>
  </section>
)

export const RightSection = ({children, id, theme, feature}) => (
  <section className={['fullpage-section', 'block'].join(' ')} id={id}>
    <div className={['chapter-content-wrapper', theme].join(' ')}>
      <div className={'chapter-content'}>
        {children}
      </div>
    </div>
    <div className='chapter-title-wrapper'>
      <div className='chapter-title'>
        {feature}
      </div>
    </div>
  </section>
)