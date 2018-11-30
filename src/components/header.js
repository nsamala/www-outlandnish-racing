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
    <Link to="#"><img src={logo} alt="Outlandnish Racing" id={layoutStyles.logo} /></Link>
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