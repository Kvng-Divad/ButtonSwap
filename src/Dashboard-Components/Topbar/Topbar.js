import React from 'react'
import Logo from "../../Assets/Logo.png"
import Logo2 from '../../Assets/Logo2.svg'
import {FaUser,} from 'react-icons/fa'
import { NavLink, Link} from "react-router-dom";
import './Topbar.css'

const Topbar = () => {
  return (
    <div className='topbar flex'>

      <div className='top-left'>
        <Link to='/' className='logo'>
          <img className='logo-img' src={Logo} alt='logo'/>
        </Link>
      </div>

      <div className='top-right flex'>
        <NavLink to='/applications' className='top-link'>My Applicaton</NavLink>
        <NavLink to='/profile' className='top-link'><FaUser/></NavLink>
        <img  className='logo-img2' src={Logo2} alt='logo'/>
      </div>
    </div>
  )
}

export default Topbar