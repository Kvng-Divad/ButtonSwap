import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Authenticate from '../Components/Authenticate/Authenticate'
import Footer from '../Components/Footer/Footer'

const Authentication = () => {
  return (
    <div className='Authentication'>
      <Navbar/>
      <Authenticate/>
      <Footer/> 
    </div>
  )
}

export default Authentication