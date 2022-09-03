import React from 'react'
import "../styles/components/Navbar.css"
import Logo from "../assets/Logo.png";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div
    className='navbarBody'>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <div className='navbarLinks'>
        <NavLink to="/" className="navbarLink">
          Home
        </NavLink>
        <NavLink to="/business" className="navbarLink">
          Business
        </NavLink>
        <NavLink to="/expert-advice" className="navbarLink">
          Expert's Advice
        </NavLink>
        <NavLink to="/weather" className="navbarLink">
          Weather Reports
        </NavLink>
        <NavLink to="/marketplace" className="navbarLink">
          Marketplace
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar