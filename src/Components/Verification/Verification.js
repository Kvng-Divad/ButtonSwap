import React from 'react'
import './Verification.css'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import {Link} from 'react-router-dom'
import Buttonalt from '../Buttonalt/Buttonalt'
import { Input } from '@chakra-ui/react'


const Verify = () => {
  return (
    <div className='Container grid'>

        <div className='breadcrumb-container grid'>
          <div className='hero-section grid'>
            <div className='hero-icon flex'>
              <Link to='/'><ChevronLeftIcon className='heroicon'/></Link>
            </div>
            <h3 className='hero-title'>APPLICATION</h3>
          </div>
          <div className='breadcrumb flex'>

            <div className='breadcrumbItem flex isCurrentPage'>
              <Link to='' className='breadcrumbLink '>1</Link>
            </div>
            <div className='seperator isCurrentPage'></div>
            <div className='breadcrumbItem flex isCurrentPage'>
              <Link to='' className='breadcrumbLink'>2</Link>
            </div>
            <div className='seperator isCurrentPage'></div>
            <div isCurrentPage className='breadcrumbItem isCurrentPage flex'>
              <Link to='' className='breadcrumbLink'>3</Link>
            </div>
            <div className='seperator isCurrentPage'></div>
            <div className='breadcrumbItem flex'>
              <Link to='' className='breadcrumbLink'>4</Link>
            </div>
          </div>
        </div>

        <div className='section-title'>
          <h3>Identity Verification</h3>
          <p>Kindly provide your information in the required fields</p>
        </div>

        <div className='verification-container grid'>

          <div className='verify-input grid'>
            <h3>Take picture / Upload ID for verification</h3>
            <Input
              placeholder=""
              size="md"
              type="file"
              className='img-input'
            />
            <p>National ID/ International passport/ NIN slip</p>
          </div>

          <div className='verify-input grid'>
            <h3>Take / Upload a photo of your face</h3>
            <Input
              placeholder=""
              size="md"
              type="file"
              className='img-input'
            />
            <p>Use your selfie camera to take a picture</p>
          </div>
        </div>

        <div className='Button grid'>
          <Buttonalt text='Next' link='/authentication'/>
        </div>

    </div>
  )
}

export default Verify