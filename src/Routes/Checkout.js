import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import CheckOut from '../Components/Checkout/CheckOut'
import Footer from '../Components/Footer/Footer'

const Checkout = () => {
  return (
    <div className='Checkout'>
      <Navbar/>
      <CheckOut/>
      <Footer/> 
    </div>
  )
}

export default Checkout