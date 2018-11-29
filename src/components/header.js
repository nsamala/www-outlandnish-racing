import React from "react"
import logo from '../images/logo.svg'
import { Link } from "gatsby"
import layoutStyles from './layout.module.css'

const ListLink = props => (
  <li className={layoutStyles.navlink}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({menuLinks}) => (
  <header>
    <ListLink to="#"><img src={logo} alt="Outlandnish Logo" id={layoutStyles.logo} /></ListLink>
    <nav id={layoutStyles.nav}>
      <ul>
        {
          menuLinks.map(link => 
            <ListLink key={link.name} to={link.link}>{link.name}</ListLink>
          )
        }
      </ul>
    </nav>
  </header>
)