import React from 'react'
import './PaymentPlan.css'
import {
    Flex,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from "@chakra-ui/react";
  import { Select } from "@chakra-ui/react";
  
const PaymentPlan = () => {
  return (
    <div className='PaymentPlan'>
        <div className='payment-plan grid'>

            <div className='payment-plan-top flex'>
                <Select
                    className='s-input'
                    disabled={''}
                    placeholder="Monthly"
                    maxW="110px"
                >
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </Select>

                <button className='change-btn'>
                  Change Payment Plan
                </button> 
            </div>
            
            <div className='payment-plan-top flex'>
              <Flex>
              <NumberInput
                  isDisabled={''}
                  size="md"
                  mr=""
                  maxW="60px"
                  max={6}
                  min={1}
              >
                  <NumberInputField  className='n-input'/>
                  <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                  </NumberInputStepper>
              </NumberInput>

              <Select
                  disabled={''}
                  placeholder="Select"
                  maxW="90px"
                  className='s-input'
              >
                  <option value="weeks">Weeks</option>
                  <option value="months">Months</option>
              </Select>

              </Flex>
              <button className='change-btn'>
                Change Payment Plan
              </button> 
            </div>
            
            </div>
    </div>
  )
}

export default PaymentPlan