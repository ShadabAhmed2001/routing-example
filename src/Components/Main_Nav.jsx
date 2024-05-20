import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Main_Nav.css"

const Main_Nav = () => {
  return (
    <nav className='mainNav'>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/aboutus">About Us</NavLink>
    </nav>
  )
}

export default Main_Nav