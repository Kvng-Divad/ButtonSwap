import React from 'react'
import './AccountDetails.css'

const AccountDetails = ({title}) => {
  const Data = [
    {
      header: "Bank",
      info:'',
    },
    {
      header: "Account number",
      info:'',
    },
    {
      header: "Bank Branch",
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

export default AccountDetails