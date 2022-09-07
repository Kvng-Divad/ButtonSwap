import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Orders from '../Components/Orders/Orders'
import Footer from '../Components/Footer/Footer'

const Order = () => {
  return (
    <div className='Oder'>
        <Navbar/>
        <Orders/>
        <Footer/>  
      </div>
  )
}

export default Order