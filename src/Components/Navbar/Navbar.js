import { React,  useState} from 'react';
import './navbar.css'
import Logo from '../../Assets/Logo.png'
import Logo2 from '../../Assets/Logo2.svg'
import { HashLink as NavLink} from "react-router-hash-link";
import {Link} from "react-router-dom";
import  { FaBars , FaTimes} from "react-icons/fa";




const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const reSize = () => {
    if(click === true) {
      setClick(!click)
  }
  }


  window.addEventListener("resize", reSize);

  
  return (
    <div className='navbar flex'>

      <Link to='/' className='logo'>
        <img className='logo-img' src={Logo} alt='logo'/>
      </Link>
      
      <ul className='nav-list flex'>
        <li><NavLink to='/#howitworks' className='navlink' activeClassName='active'>HOW IT WORKS</NavLink></li>
        <li><Link to='/products' className='navlink' activeClassName='active'>APPLY NOW</Link></li>
        <li><NavLink to='/#calculator' className='navlink' activeClassName='active'>CALCULATOR</NavLink></li>
        <li><NavLink to='/#faqs' className='navlink' activeClassName='active'>FAQS</NavLink></li>
      </ul>

      <div className='logo'>
        <img  className='logo-img2' src={Logo2} alt='logo'/>

        <div className='toggler' onClick={handleClick}>
          {click ? (

            <FaTimes size={16} style={{color:"#000"}} />
              ) : (

              <FaBars size={16} style={{color:"#000"}}/>
              )      
          }         

        </div>

      </div>

      <>
        <div className={click ? 'drop-menu grid  active' : 'drop-menu grid '}>

          <div>

            <ul className='drop-menu-list grid'>
              <li><Link to='/' className='navLink' activeClassName='active'>HOME</Link></li>
              <li><NavLink to='/#howitworks' className='navLink' activeClassName='active'>HOW IT WORKS</NavLink></li>
              <li><NavLink to='/#calculator' className='navLink' activeClassName='active'>CALCULATOR</NavLink></li>
              <li><NavLink to='/#faqs' className='navLink' activeClassName='active'>FAQS</NavLink></li>
            </ul>

            <Link to='/products' onClick={handleClick} className='btn-container grid'>
                <button className='btn-alt2' >
                    Apply Now
                </button>
            </Link>
          </div>
            
        </div>
    </>


      
    </div>



  )
}



export default Navbar