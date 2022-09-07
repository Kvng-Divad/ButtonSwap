import React from 'react'
import './Footer.css'
import Logo3 from '../../Assets/Logo3.png'
import  { FaLinkedin, FaTwitter, FaMailBulk,FaInstagram,FaWhatsapp, FaPhone } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer grid'>
        <div className='footer-container grid'>
            <div className='footer-info grid'>
                <img src={Logo3} alt='logo'/>
                <p>Keza Africa is on a mission to providing africans the convenience in purchasing refurbished and brand new smartphones.</p>
            </div>
            
            <div className='footer-info2 grid'>

             <button className='button flex'> 
              <FaPhone/> 
              Call Us
             </button>
              
              <div className='footer-icons flex'>
                <a href='https://twitter.com/KezaHQ' className='icon'><FaTwitter /></a>
                <a href='https://instagram.com/kezaafrica' className='icon'><FaInstagram /></a>
                <a href='https://www.linkedin.com/company/keza-hq/' className='icon'><FaLinkedin /></a>
                <a href='hello@kezaafrica.com' className='icon'><FaMailBulk /></a>
                <a href='https://api.whatsapp.com/send?phone=2349161112671' className='icon'><FaWhatsapp /></a>
              </div>
            </div>

            
        </div>

        <div className='terms grid'>
            <p className='copy'>Copyright © 2022. Keza Africa. All rights reserved.</p>
        </div>
    </div>
    
  )
}

export default Footer