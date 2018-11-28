import React from "react"
import Header from './header'
import layoutStyles from './layout.module.css'

export default ({ children }) => (
  <div id={layoutStyles.siteWrapper}>
    <Header />
    {children}
  </div>
)