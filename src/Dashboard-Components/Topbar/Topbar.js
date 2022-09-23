import React from 'react'
import Logo from "../../Assets/Logo.png"
import Logo2 from '../../Assets/Logo2.svg'
import {AiOutlineUser} from 'react-icons/ai'
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
        <NavLink to='/applications' className='top-link' activeClassName='active'>My Applicaton</NavLink>
        <NavLink to='/profile' className='topLink' activeClassName='active' ><AiOutlineUser className='top-link2'/></NavLink>
        <img  className='logo-img2' src={Logo2} alt='logo'/>
      </div>
    </div>
  )
}

export default Topbar