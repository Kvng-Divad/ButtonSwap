import React from 'react'
import {Link} from 'react-router-dom'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import Buttonalt from '../Buttonalt/Buttonalt'
import './Summary.css'

const Summarys = () => {
  return (
    <div className='Container2 grid'>

      <div className='hero-section grid'>

        <div className='hero-icon flex'>
          <Link to='/'><ChevronLeftIcon className='heroicon'/></Link>
        </div>
        <h3 className='hero-title'>SUMMARY</h3>

      </div>

      <div className='order-container grid'>
        
        <div className='order-left'>

            <div className='order-logo'>

            </div>
            <div className='order-images'>

            </div>

        </div>

        <div className='order-right'>

        <div className='order-summary grid'>
          <div className='order-details grid'>
            <h4>MODEL</h4>
            <p>{}</p>
          </div>

          <div className='order-details'>
            <h4>CAPACITY</h4>
            <p>{}</p>
          </div>

          <div className='order-details'>
            <h4>COLOR</h4>
            <p>{}</p>
          </div>

          <div className='order-details'>
            <h4>PAYMENT PLAN</h4>
            <p>{}</p>
            <p>{}</p>
          </div>

          <div className='order-details'>
            <h4>PAYMENT TERMS</h4>
            
          </div>

        </div>
        
        <div className='payment'>

        </div>
        
        <div className='Button grid'>
          <Buttonalt text='Apply' link='/details'/>
        </div>
        </div>
      </div>

    </div>
  )
}

export default Summarys