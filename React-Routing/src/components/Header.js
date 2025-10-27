import React from 'react'
import { Link } from 'react-router'
import "../Style.css"
const Header = () => {
  return (
    // div.
    <>
      <div className="header-learn">
        <nav className='navbar'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/aboutclass'>About Class</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/courses'>Courses</Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header