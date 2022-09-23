import React from 'react'
import './PlanCard.css'
import {CircularProgress} from '@chakra-ui/react'

const PlanCard = () => {
  const Data = [
    {
      plan: "Down payment",
      color:'#E3000F',
    },
    {
      plan: "1st instalment",
      color:'#8A8A8A',
    },
    {
      plan: "2nd instalment",
      color:'#8A8A8A',
    },
    {
      plan: "3rd instalment",
      color:'#8A8A8A',
    },
];

  return (
    <div className='planCard'>
      <div className='plan-conainer grid'>
          
        <div className='planCard-left grid'>
          <CircularProgress value={30} size='150px' color='#E3000F' thickness='16px' className='plan-progress' />
        </div>

        <div className='planCard-right grid'>

          <div className='plan-value grid'>
            <h3>30%</h3>
            <p>Complete</p>
          </div>
          
          <div className='plan-keys grid'>

            {Data.map((item, index) => {
            return (
              <div key={index} className='plan-key flex'>
                  <span style={{background:item.color}}></span> <p>{item.plan}</p>
              </div>
            );
            })}

          </div>
          
        </div>

      </div>
    </div>
  )
}

export default PlanCard