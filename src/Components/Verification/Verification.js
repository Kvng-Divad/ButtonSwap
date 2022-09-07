import React from 'react'
import './Verification.css'
import Breadcrumbs from '../Breadcrumb/Breadcrumb'
import Buttonalt from '../Buttonalt/Buttonalt'
import { Input } from '@chakra-ui/react'


const Verify = () => {
  return (
    <div className='Container grid'>

        <Breadcrumbs/>

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