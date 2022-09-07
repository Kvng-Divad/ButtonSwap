import React from 'react'
import './CheckOut.css'
import Breadcrumbs from '../Breadcrumb/Breadcrumb'
import Buttonalt from '../Buttonalt/Buttonalt'

const CheckOut = () => {
  return (
    <div className='Container grid'>

        <Breadcrumbs/>

        <div className='section-title'>
          <h3>Order Summary</h3>
          <p>Kindly confirm your order details</p>
        </div>

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
  )
}

export default CheckOut