import React from 'react'
import './ApplicationDetails.css';
import Dashbtn from "../dash-btn";


const DeviceInfo = ({title}) => {
  return (
    <div className='application-details'>

        <div className='dash-header flex'>
            <p className='dash-title'>{title}</p>
        </div>

        <div className="application-info grid">

            <p>Please complete the below actions</p>

            <div className="application-infos grid">

                <div className="actions flex">

                  <span className="name">Loan Agreement</span>

                  <div className="profile-btn grid">
                    <Dashbtn text='complete' type="submit" link=''/>
                  </div>
                </div>

                <div className="actions flex">

                  <span className="name">Complete Payment</span>

                  <div className="profile-btn grid">
                    <Dashbtn text='complete' type="submit" link=''/>
                  </div>

                </div>

            </div>
        </div>
        
    </div>
  )
}

export default DeviceInfo