import React from 'react'
import Eligibilty from '../Components/Eligibilty/Eligibilty'
import Faqs from '../Components/Faqs/Faqs'
import Footer from '../Components/Footer/Footer'
import Hero from '../Components/Hero/Hero'
import HowItWorks from '../Components/HowItWorks/HowItWorks'
import Navbar from '../Components/Navbar/Navbar'


const Landing = () => {
  return (
    <div className='landing'>
        <Navbar/>
        <Hero/>
        <HowItWorks/>
        <Eligibilty/>
        <Faqs/>
        <Footer/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    </div>
  )
}

export default Landing