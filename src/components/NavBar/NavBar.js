import React from 'react'
import './NavBar.sass'
import Logo from '../../assets/LOGO.png'

const NavBar = () => {
    return (
        <nav className='navBar'>
            <img className='navBar__logo' src={Logo} alt='Logo'/>
        </nav>
    )
}

export default NavBar
