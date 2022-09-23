import React from 'react'
import './ScheduleCard.css'




const ScheduleCard = () => {
  const Data = [
    {

    },
  ]
  

  return (
    <div className='ScheduleCard'>
      <div className="order-details">
              <h4>TOTAL</h4>
              <p>Down Payment: </p>
              {Data.map(
                number =>{
                  const cardinal = Number(String(number + 1).slice(-1));
                return (
                <p key={number}>{`${number + 1}${
                  cardinal === 1
                    ? "st"
                    : cardinal === 2
                    ? "nd"
                    : cardinal === 3
                    ? "rd"
                    : "th"
                } payment: ${''}`}</p>
              );
              })};  
      </div>
    </div>
  )
}

export default ScheduleCard