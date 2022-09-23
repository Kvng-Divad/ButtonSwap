import React from 'react'
import './Sidebar.css'
import signout from '../../Assets/signout.svg'
import {FaRegClipboard, FaHistory,} from 'react-icons/fa'
import {AiOutlineHome,AiOutlineWallet} from 'react-icons/ai'
import {BiSupport}from 'react-icons/bi'
import { Link } from 'react-router-dom'



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
    {
      heading:'Action Center',
      link:'/history',
      icon: FaHistory,
    },
    {
      heading:'Support',
      link:'/support',
      icon: BiSupport,
    },
  ]

const Sidebar = () => {
  return (
    <div className='sidebar grid'>        
          <div className="dash-menu grid">

            {SidebarData.map (( item, index) => {
                return(
                  <Link to={item.link} className="menu-link flex active"
                    key={index}
                    >
                      <item.icon className="menu-icon"/>
                      <span className="menu-title">
                        {item.heading}
                    </span>
                  </Link>
                )
              })
              }
          </div>

          <div className="menuitem">
            
            <div className="profile">
              
            </div>
            
            <img src={signout} alt='out' className="menu-icon"/>
          </div>

    </div>
  )
}

export default Sidebar