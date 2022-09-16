import React from 'react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import {Link} from 'react-router-dom'
import './Income.css'
import { Select } from '@chakra-ui/react'
import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import {CheckIcon} from '@chakra-ui/icons'
import Buttonalt from '../Buttonalt/Buttonalt'

const Incomes = () => {
  return (

  <div>

    <div className='breadcrumb-container grid'>
      
      <div className='hero-section grid'>

      <div
              className="hero-icon flex"
              onClick={() => {
                window.history.back();
              }}
            >
              <ChevronLeftIcon className="heroicon" />
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
        <div isCurrentPage className='breadcrumbItem flex'>
          <Link to='' className='breadcrumbLink'>3</Link>
        </div>
        <div className='seperator '></div>
        <div className='breadcrumbItem flex'>
          <Link to='' className='breadcrumbLink'>4</Link>
        </div>
      </div>
    </div>

    <div className='Container grid'>

      <div className='form-container grid'>

        <div className='section-title'>
          <h3>Other information</h3>
          <p>Kindly provide your information in the required fields</p>
        </div>

        <div className='input grid'>

        <label className='label'>Monthly income</label>

        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children='#'
          />
          <Input placeholder='How much do you earn in a month?' />
          <InputRightElement children={<CheckIcon color='green.500' />} />
        </InputGroup>
        </div>

        <div>

          <label className='label'>Bank Branch</label>

          <Select placeholder='Where is your bank located?' spacing={3}  className='filter' size='lg'>
              <option value=''></option>
              <option value=''></option>
              <option value=''></option>
          </Select>
        </div>

        <div className='Button grid'>
          <Buttonalt text='NEXT' link='/verification'/>
        </div>

      </div>
      
    </div>

  </div>
  )
}

export default Incomes