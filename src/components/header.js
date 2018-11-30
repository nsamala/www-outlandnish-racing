import React, { Component } from "react"
import logo from '../images/logo.svg'
import { Link } from "gatsby"
import layoutStyles from './layout.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const ListLink = props => (
  <li className={layoutStyles.navlink}>
    <Link to={props.to} onClick={props.onClick}>{props.children}</Link>
  </li>
)

class MenuLinks extends Component {
  openNav() {
    let menu = document.getElementById('menu')
    let content = document.getElementById(layoutStyles.siteWrapper)

    if (menu)
      menu.style.width = "250px"
    
    if (content)
      content.style.marginLeft = "250px"
  }

  closeNav() {
    let menu = document.getElementById('menu')
    let content = document.getElementById(layoutStyles.siteWrapper)

    if (menu)
      menu.style.width = "0"

    if (content)
      content.style.marginLeft = "0"
  }

  render() {
    return (
      <header>
        <Link to="#"><img src={logo} alt="Outlandnish Racing" id={layoutStyles.logo} /></Link>
        <button id={layoutStyles.openButton} className={layoutStyles.buttonLink} onClick={this.openNav}><FontAwesomeIcon icon={faBars} color="white" /></button>
        <nav id="menu">
          <button id={layoutStyles.closeButton} className={[layoutStyles.buttonLink, 'hide-desktop'].join(' ')} onClick={this.closeNav}><FontAwesomeIcon icon={faTimes} color="white" /></button>
          <Link to="#" onClick={this.closeNav}><img src={logo} alt="Outlandnish Racing" className={[layoutStyles.navLogo, 'hide-desktop'].join(' ')} /></Link>
          <ul>
            {
              this.props.menuLinks.map(link => 
                <ListLink onClick={this.closeNav} key={link.name} to={link.link}>{link.name}</ListLink>
              )
            }
          </ul>
        </nav>
      </header>
    )
  }
}

export default MenuLinks