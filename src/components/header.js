import React from "react"
import logo from '../images/logo.svg'
import navFont from '../fonts/RabbidHighwaySignII.otf'
import { Link } from "gatsby"
import layoutStyles from './layout.module.css'

const ListLink = props => (
  <li className={layoutStyles.navlink}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default () => (
  <header>
    <ListLink to="#"><img src={logo} alt="Outlandnish Logo" id={layoutStyles.logo} /></ListLink>
    <nav id={layoutStyles.nav}>
      <ul>
        <ListLink to="#about">About</ListLink>
        <ListLink to="#season">2019 Season</ListLink>
        <ListLink to="#partners">Partners</ListLink>
        <ListLink to="#media">Media</ListLink>
        <ListLink to="/updates">Updates</ListLink>
      </ul>
    </nav>
  </header>
)