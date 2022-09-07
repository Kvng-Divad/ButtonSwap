import React from 'react'
import './Hero.css'
import hero from '../../Assets/Hero.png'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-container grid'>

        <div className='hero-content grid'>

          <div className='hero-info grid'>
            
            <h2>Own a <span>smartphone</span> on a smart plan</h2>
            <p>Own a smartphone and pay conveniently in monthly instalments with KEZA.</p>
            <Button text='Get Started'/>
          </div>
          
        </div>

        <div className='hero-img grid'>
          <img className='hero-image'src={hero} alt='hero'/>
        </div>

      </div>
    </div>
  )
}

export default Hero