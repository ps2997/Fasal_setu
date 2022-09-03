import React from 'react'
import "../styles/components/Navbar.css"
import Logo from "../assets/Logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div
    className='navbarBody'>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
    </div>
  )
}

export default Navbar