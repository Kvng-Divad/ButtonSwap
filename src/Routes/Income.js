import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Incomes from '../Components/Income/Income'
import Footer from '../Components/Footer/Footer'

const Income = () => {
  return (
    <div className='Income'>
      <Navbar/>
      <Incomes/>
      <Footer/> 
    </div>
  )
}

export default Income