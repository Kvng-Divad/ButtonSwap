import React from 'react'
import './Eligibilty.css'
import Button from '../Button/Button'
import { Select } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

const Eligibilty = () => {
  return (
    <div className='eligibilty grid' id='calculator'>
      <div className="title grid">
        <h3>SMARTPHONE CALCULATOR</h3>
        <p>Find out what your phone plan looks like</p>
      </div>

      <div className='calculator-container grid'>

        <Input placeholder='What phone would you like?' className='filter' />

        <Select placeholder='Phone storage' spacing={3}  className='filter' size='lg'>
          <option value='64GB'>64GB</option>
          <option value='128GB'>128GB</option>
          <option value='256GB'>256GB</option>
        </Select>

        <Select placeholder='Phone condition' spacing={3}  className='filter' size='lg'>
          <option value='Pre Owned'>Pre Owned</option>
          <option value='Brand New'>Brand New</option>
        </Select>

        <Select placeholder='Phone color' spacing={3}  className='filter' size='lg'>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>

        <Select placeholder='Payment plan' spacing={3}  className='filter' size='lg'>
          <option value='Pay monthly'>Pay monthly</option>
          <option value='Pay now'>Pay now</option>
        </Select>

        <Select placeholder='Payment terms' spacing={3}  className='filter' size='lg'>
          <option value='1 Month'>1 Month</option>
          <option value='2 Months'> 2 Months</option>
          <option value='3 Months'> 3 Months</option>
          <option value='4 Months'> 4 Months</option>
          <option value='5 Months'>5 Months</option>
          <option value='6 Months'>6 Months</option>
        </Select>

      </div>

      <Button text='Apply Now'/>
    </div>
  )
}

export default Eligibilty