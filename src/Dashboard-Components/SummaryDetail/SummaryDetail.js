import React from 'react'
import './SummaryDetail.css'

const SummaryDetail = () => {
  return (
    
    <div className='summary-details'>

        <div className='summary-card grid'>

            <h3>Iphone 13 Pro</h3>

            <div className='summary-detail grid'>

              <div className='summary-detail-left'>
                <h4>128GB</h4>
                <div className='detail-key flex'>
                      <span style={{background:'grey'}}></span> <p>Grey</p>
                    </div>
              </div>

              <div className='summary-detail-center'>
                <p>Monthly plan</p>
                <p>3 months</p>
              </div>

            </div>

        </div>

    </div>
  )
}

export default SummaryDetail