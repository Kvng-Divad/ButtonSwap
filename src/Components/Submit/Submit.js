import React from 'react'
import './Submit.css'
import Buttonalt from '../Buttonalt/Buttonalt'
import Icon from '../../Assets/icon4.svg'

const Submit = () => {
  return (
    <div className='Container grid'>

        <div className='close-title grid'>
          <img src={Icon} alt='icon'/>
          <p>You’re on our waitlist</p>
        </div>
        
        <h3 className='close-description'>We will notify you via email once your application has been approved</h3>
        
        <Buttonalt text='Close' link='/'/>
    </div>
  )
}

export default Submit