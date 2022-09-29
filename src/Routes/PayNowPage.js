import React from 'react'
import PayNow from '../Components/PayNow/PayNow'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const PayNowPage = () => {
  return (
    <div className='Application'>
      <Navbar/>
      <PayNow/>
      <Footer/>   
    </div>
  )
}

export default PayNowPage