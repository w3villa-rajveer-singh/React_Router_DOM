import React from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
  return (
    <div className="nav">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/">Login</NavLink>
    </div>
  )
}

export default NavBar