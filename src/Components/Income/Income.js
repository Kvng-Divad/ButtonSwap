import React from 'react'
import Breadcrumbs from '../Breadcrumb/Breadcrumb'
import './Income.css'
import { Select } from '@chakra-ui/react'
import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import {CheckIcon} from '@chakra-ui/icons'
import Buttonalt from '../Buttonalt/Buttonalt'

const Incomes = () => {
  return (
    <div className='Container grid'>

      <Breadcrumbs/>

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
  )
}

export default Incomes