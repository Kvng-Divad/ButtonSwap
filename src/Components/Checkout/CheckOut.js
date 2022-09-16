import React from 'react'
import './CheckOut.css'
import {Link} from 'react-router-dom'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import Buttonalt from '../Buttonalt/Buttonalt'

const CheckOut = () => {
  return (

    <div>

      <div className='breadcrumb-container grid blur'>
            <div className='hero-section grid'>
            <div
            className="hero-icon flex"
            onClick={() => {
              window.history.back();
            }}
          >
            <ChevronLeftIcon className="heroicon" />
          </div>

              <h3 className='hero-title'>APPLICATION</h3>
            </div>
            <div className='breadcrumb flex'>

              <div className='breadcrumbItem flex isCurrentPage'>
                <Link to='' className='breadcrumbLink '>1</Link>
              </div>
              <div className='seperator isCurrentPage'></div>
              <div className='breadcrumbItem flex isCurrentPage'>
                <Link to='' className='breadcrumbLink'>2</Link>
              </div>
              <div className='seperator isCurrentPage'></div>
              <div isCurrentPage className='breadcrumbItem flex isCurrentPage'>
                <Link to='' className='breadcrumbLink'>3</Link>
              </div>
              <div className='seperator isCurrentPage'></div>
              <div className='breadcrumbItem flex isCurrentPage'>
                <Link to='' className='breadcrumbLink'>4</Link>
              </div>
            </div>
      </div>

      <div className='Container grid'>

        <div className='section-title'>
          <h3>Order Summary</h3>
          <p>Kindly confirm your order details</p>
        </div>
        
        <div className='form-container grid'>

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

          </div>

          <div className='payment'>

          </div>

        <Buttonalt text='Finish' link='/submit'/>

        </div>
        
      </div>

    </div>
    
  )
}

export default CheckOut