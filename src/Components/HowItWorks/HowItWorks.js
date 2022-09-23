import React from 'react'
import './HowItWorks.css'
import Button from '../Button/Button'
import icon1 from '../../Assets/icon1.svg'
import icon2 from '../../Assets/icon2.svg'
import icon3 from '../../Assets/icon3.svg'
import { Link } from 'react-router-dom'

const HowItWorks = () => {

  const Data = [
    {
      icon: icon1,
      name: "Select a Smartphone",
      description:'Choose from a wide range of phone brands including brand new or pre-owned phones',
      color:'#FFFEF1',
    },
    {
      icon: icon2,
      name: "Start a Phone Plan",
      description:'Check your eligibility and fill the application form for a convenient payment plan',
      color:'#F5FFF4',
    },
    {
      icon: icon3,
      name: "Make your first instalment",
      description:'Make your first payment after your application has been approved to get your phone delivered.',
      color:'#FEF7FF',
    },
  ]
  return (
    <div className="HowItWorks grid" id='howitworks'>
      <div className="HowItWorks-container grid">

        <div className="title">
          <h3>HOW IT WORKS</h3>
        </div>


      <div className="HowItWorks-cards grid">
        {Data.map(({ icon, name, description, color}) => {
          return (
            <Link to='/products'className="card grid">

              <div className="icons">
                <img src={icon} alt='icon'/>
              </div>

              <h4 className="card-name">{name}</h4>

              <p className="description">{description}</p>
              
            </Link>
          );
        })}
      </div>

      <Button text='start phone plan'/>

      </div>
      
    </div>
  )
}

export default HowItWorks;