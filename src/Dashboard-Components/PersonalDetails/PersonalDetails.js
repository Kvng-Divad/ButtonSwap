import React from 'react'
import './PersonalDetails.css'

const PersonalDetails = ({title}) => {
    const Data = [
        {
          header: "Full Name",
          info:'',
        },
        {
          header: "Work email",
          info:'',
        },
        {
          header: "Phone number",
          info:'',
        },
        {
          header: "Delivery address",
          info:'',
        },
    ];

  return (
    <div className='application-details grid'>

        <div className='dash-header flex'>
            <p className='dash-title'>{title}</p>
        </div>

        <div className='details-container grid'>
        {Data.map((item, index) => {
            return (
            <div key={index} className='info-details grid'>
                <h4>{item.header}</h4>
                <p>{item.info}</p>
            </div>
            );
        })}
        </div>

    </div>
  )
}

export default PersonalDetails