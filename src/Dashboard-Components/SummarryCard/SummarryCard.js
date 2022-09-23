import React from 'react'
import Dashbtn from '../dash-btn'
import './SummarryCard.css'

const SummarryCard = ({title}) => {
  return (
    <div className='summarry-Card'>
        <div className='application-details grid'>

          <div className='dash-header flex'>
              <p className='dash-title'>{title}</p>
          </div>
          <div className='summarry-card-container grid'>

            <div className='summarry-card grid'>

                <h3>Iphone 13 Pro</h3>
                <div className='summarry-detail grid'>

                  <div className='summarry-detail-left grid'>
                    <h4>128GB</h4>
                    <div className='detail-key flex'>
                      <span style={{background:'grey'}}></span> <p>Grey</p>
                    </div>
                  </div>

                  <div className='summarry-detail-center grid'>
                    <p>Monthly plan</p>
                    <p>3 months</p>
                  </div>

                  <div className='summarry-detail-center grid'>
                    <p>Brand new</p>
                  </div>
                </div>
            </div>

            <div className='profile-btn Btns'>
                <Dashbtn text='VIEW APPLICATION' type="" link=''/>
            </div>

          </div>
        </div>
    </div>
  )
}

export default SummarryCard