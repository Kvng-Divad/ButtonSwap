import React from 'react'
import { NavLink } from 'react-router-dom';
import './DeviceDetails.css'

const DeviceDetails = ({title}) => {
    const Data = [
        {
          header: "MODEL",
          info:'',
        },
        {
          header: "CAPACITY",
          info:'',
        },
        {
          header: "COLOR",
          info:'',
        },
        {
          header: "PREFERRED CONDITION",
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
            
            <div className='info-details grid'>
                <h4>PAYMENT PLAN</h4>
                <div className='info-plan flex'>
                    <p>{''}</p>
                    <NavLink to='' className='info-link'>Change</NavLink>
                <div/> 
            </div>

            <div className='info-details grid'>
                <h4>PAYMENT TERMS</h4>
                <div className='info-plan flex'>
                    <p>{''}</p>
                    <NavLink to='' className='info-link'>Change</NavLink>
                <div/>
            </div>

            <div className='info-details grid'>
                <h4>TOTAL PAYMENT</h4>

            </div>    

            </div>

            </div>

        </div>
    </div>
  )
}

export default DeviceDetails