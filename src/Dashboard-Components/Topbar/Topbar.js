import React, { useState, useContext} from 'react'
import Logo from "../../Assets/Logo.png"
import Logo2 from '../../Assets/Logo2.svg'
import {AiOutlineUser} from 'react-icons/ai'
import  { FaBars , FaTimes} from "react-icons/fa";
import { NavLink, Link} from "react-router-dom";
import './Topbar.css'
import  {toggleContext} from '../../Context/Context'




const Topbar = () => {

  const  {expanded , setExpanded} = useContext(toggleContext);
  const [click, setClick] = useState(false);
  const reSize = () => {
    if(click === true) {
      setClick(!click)
  }
  else{
    setClick(false)
  }
  }
  window.addEventListener("resize", reSize);
  return (
    <div className='topbar flex'>

      <div className='top-left flex'>
        <div>
          <div className='toggler2'
            onClick={()=>{
              setExpanded(!expanded);
              setClick(!click);
              console.log(expanded);
            }}
          >

            {click ? (

              <FaTimes size={16} style={{color:"#000"}} />
                ) : (

                <FaBars size={16} style={{color:"#000"}}/>
                )      
            }     
                

          </div>
        </div>

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