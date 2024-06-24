import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import logo from "../../Assets/logocrms.png"
function Navbar() {
  return (
    <nav className='container'>
      <Link to={'/'}> <img src={logo} alt="" className='logo' /> </Link>
        <ul>
        <Link to={'/'}><li>Home</li></Link>
        <Link to={'/About'}> <li>About</li></Link>
        <Link to={'/Contact'}><li>Contact</li></Link>
        <Link to={'/login'}>  <li>Login</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar