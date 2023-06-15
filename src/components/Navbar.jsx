import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import {links} from '../constants/data'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import './navbar.css'

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);


  return (
    <nav>
      <div className="container nav__container">
        <Link className='logo' to='/' onClick={() => setIsNavShowing(false)}>
          <img src={logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
          {
            links.map(({
              name, path
            }, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={path}
                    className={({isActive}) => isActive ? 'active-nav' : ''}
                    onClick={() => setIsNavShowing(prev => !prev)}
                  >
                    {name}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>

        {/* links on mobile devices */}
        <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
          {
            isNavShowing ? <MdOutlineClose /> : <GoThreeBars />
          }
        </button>
      </div>
    </nav>
  )
}

export default Navbar