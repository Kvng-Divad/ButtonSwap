import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Verify from '../Components/Verification/Verification'
import Footer from '../Components/Footer/Footer'

const Verification = () => {
  return (
    <div className='Verification'>
      <Navbar/>
      <Verify/>
      <Footer/> 
    </div>
  )
}

export default Verification