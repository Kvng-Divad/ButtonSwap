import React from 'react'
import './PaymentCard.css'
import { Link } from 'react-router-dom'
import icon1 from '../../Assets/naira-green.svg'
import icon2 from '../../Assets/naira-red.svg'
import icon3 from '../../Assets/naira-grey.svg'

const PaymentCard = () => {
  const Data = [
    {
      icon: icon1,
      name: "Payment so far",
      description:'Last payment:',
      color:'#267D18',
      color2:'#E3000F',
      value:0,
      progress:'0% complete',
    },
    {
      icon: icon2,
      name: "Payment pending",
      description:'Next payment:',
      color:'#E3000F',
      color2:'#585858',
      value:0,
      progress:'0% pending',
    },
    {
      icon: icon3,
      name: "Total payment",
      description:'Final  payment:',
      color:'#8E8E8E',
      color2:'#585858',
      value:0,
      progress:'0% complete',
    },
  ]
  return (
    <div className='paymentcard grid'>
         <div className="payment-cards grid">
          {Data.map((item, index) => {
          return (
            <Link key={index} to='/payment'className="p-card grid">

              <p className="p-name">{item.name}</p>

              <div className="p-card-content grid">
                <div className="p-price flex">
                  <img src={item.icon} alt='icon' className="p-icon"/>
                  <h3 className="p-value" style={{color:item.color}}>{item.value}</h3>
                </div>

                <p className="p-progress"style={{color:item.color2}}>{item.progress}</p>

                <p className="p-description">{item.description}</p>
              
              </div>
              
            </Link>
          );
        })}
      </div>

    </div>
  )
}

export default PaymentCard