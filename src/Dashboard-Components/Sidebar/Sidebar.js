import React from 'react'
import './Sidebar.css'
import {FaRegClipboard, FaSignOutAlt} from 'react-icons/fa'
import {AiOutlineHome,AiOutlineWallet} from 'react-icons/ai'
//import {BiSupport}from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import profile from '../../Assets/profile.svg'


const SidebarData = 
  [
    {
      heading: "Dashboard",
      link: "/dashboard",
      icon: AiOutlineHome,
    },
    {
      heading: "My Application",
      link: "/applications",
      icon: FaRegClipboard,
    },
    {
      heading:'Payment',
      link:'/payment',
      icon: AiOutlineWallet,
    },
   /*{
      heading:'Action Center',
      link:'/history',
      icon: FaHistory,
    },
    {
      heading:'Support',
      link:'/support',
      icon: BiSupport,
    },*/
  ]

const Sidebar = () => {
  return (
    <div className='sidebar grid'>        
          <div className="dash-menu grid">

            {SidebarData.map (( item, index) => {
                return(
                  <NavLink to={item.link} className="menu-link flex"
                   activeClassName='active'
                    key={index}
                    >
                      <item.icon className="menu-icon"/>
                      <span className="menu-title">
                        {item.heading}
                    </span>
                  </NavLink>
                )
              })
              }
          </div>

          <div className="menuitem">
            
            <NavLink to='/profile' className='profile grid'
              activeClassName='active'
            >

              <div className='profile-image'>
                  <img src={profile} alt=''/>
              </div>

              <div className='profile-details grid'>
                <div className='profile-id flex'>
                    <p>ID:</p>
                    <p>01234455</p>
                </div>

                <div className='profile-name'>
                    <h3>Jemimah J.J</h3>
                </div>
            </div>

            </NavLink>
            
            <div className="signout flex">
              <FaSignOutAlt className="menu-icon2"/>
              <p>Sign Out</p>
            </div>
          </div>

    </div>
  )
}

export default Sidebar