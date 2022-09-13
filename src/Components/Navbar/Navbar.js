import { React,  useState, useRef} from 'react';
import './navbar.css'
import Logo from '../../Assets/Logo.png'
import Logo2 from '../../Assets/Logo2.svg'
import { NavLink, Link} from "react-router-dom";
import  { FaBars } from "react-icons/fa";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  useDisclosure ,
  DrawerCloseButton,
} from '@chakra-ui/react'



const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <div className='navbar flex'>

      <Link to='/' className='logo'>
        <img className='logo-img' src={Logo} alt='logo'/>
      </Link>
      
      <ul className='nav-list flex'>
        <li><NavLink to='/#howitworks' className='navlink'>HOW IT WORKS</NavLink></li>
        <li><NavLink to='/products' className='navlink'>APPLY NOW</NavLink></li>
        <li><a href='#eligibility' className='navlink'>CALCULATOR</a></li>
        <li><a href='#faqs' className='navlink'>FAQS</a></li>
      </ul>

      <div className='logo'>
        <img  className='logo-img2' src={Logo2} alt='logo'/>

        <div className='toggler' onClick={handleClick}>

            <FaBars size={16} style={{color:"#000"}} ref={btnRef} onClick={onOpen} />  

        </div>

      </div>

      <>
      <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerContent className='drop-menu grid'>

          <DrawerCloseButton />

          <DrawerBody>

            <ul className='drop-menu-list grid'>
              <li><a href='#howitworks' className='navlink'>HOW IT WORKS</a></li>
              <li><NavLink to='/produtcs' className='navlink'>APPLY NOW</NavLink></li>
              <li><a href='#calculator' className='navlink'>CALCULATOR</a></li>
              <li><a href='#faqs' className='navlink'>FAQS</a></li>
            </ul>

            <Link to='/products' onClick={onClose} className='btn-container grid'>
                <button className='btn-alt2' >
                    Apply Now
                </button>
            </Link>
          </DrawerBody>
            
        </DrawerContent>
      </Drawer>
    </>


      
    </div>
  )
}

export default Navbar