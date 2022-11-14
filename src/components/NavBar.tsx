import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Logo from '../assets/BDLogo.png'
import { NavBarStyled } from '../styles/NavBarStyled'

const NavBar = () => {
  return (
    <>
    <NavBarStyled>
        <img src={Logo} alt='logo' style={{ width: '3rem'}}/>
        <FontAwesomeIcon icon={ faBars as IconProp} size='2x' />
    </NavBarStyled>
    </>
  )
}

export default NavBar