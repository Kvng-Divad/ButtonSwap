import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Summarys from '../Components/Summary/Summary'
import Footer from '../Components/Footer/Footer'

const Summary = () => {
  return (
    <div className='Summary'>
        <Navbar/>
        <Summarys/>
        <Footer/>  
    </div>
  )
}

export default Summary