import React from 'react'
import { Link } from 'react-router'
import "../Style.css"
const Header = () => {
  return (
    // div.
    <>
      <div className='bg-blue-500'>
        <nav className='navbar'>
          <ul className="flex flex-row justify-around items-center h-15 ">
            <li className='m-4 px-2 py-1  text-lg font-medium text-cyan-50 hover:bg-blue-700 hover:border-transparent-2 hover:rounded-lg'><Link to='/'>Home</Link></li>
            <li className='m-4 px-2 py-1  text-lg font-medium text-cyan-50 hover:bg-blue-700 hover:border-transparent-2 hover:rounded-lg'><Link to='/about'>About</Link></li>
            <li className='m-4 px-2 py-1  text-lg font-medium text-cyan-50 hover:bg-blue-700 hover:border-transparent-2 hover:rounded-lg'><Link to='/aboutclass'>About Class</Link></li>
            <li className='m-4 px-2 py-1  text-lg font-medium text-cyan-50 hover:bg-blue-700 hover:border-transparent-2 hover:rounded-lg'><Link to='/contact'>Contact</Link></li>
            <li className='m-4 px-2 py-1  text-lg font-medium text-cyan-50 hover:bg-blue-700 hover:border-transparent-2 hover:rounded-lg'><Link to='/courses'>Courses</Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header