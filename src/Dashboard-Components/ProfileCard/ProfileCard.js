import React from 'react'
import './ProfileCard.css'
import profile from '../../Assets/profile.svg'

const ProfileCard = () => {
  return (
    <div className='application-details'>
        <div className='profile-card grid'>

            <div className='profile-img'>
                <img src={profile} alt=''/>
            </div>

            <div className='profile-details grid'>
                <div className='profile-card-id flex'>
                    <p>ID:</p>
                    <p>01234455</p>
                </div>

                <div className='profile-card-name'>
                    <h3>Jemimah Jane Johnson</h3>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ProfileCard