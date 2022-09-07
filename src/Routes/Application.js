import React from 'react'
import Applications from '../Components/Application/Applications'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const Application = () => {
  return (
    <div className='Application'>
      <Navbar/>
      <Applications/>
      <Footer/>   
    </div>
  )
}

export default Application