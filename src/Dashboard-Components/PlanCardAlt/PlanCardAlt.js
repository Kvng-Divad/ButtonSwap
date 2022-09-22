import React from 'react'
import './PlanCardAlt.css'
import {CircularProgress} from '@chakra-ui/react'
import { useRecoilState } from "recoil";
import { applicationState, singleProductState } from "../../data/state";
import {
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";





const PlanCardAlt = () => {
  const plans = [
    { name: "Pay Monthly", value: "recurring" },
    { name: "Pay Now", value: "once" },
  ];

  const [product] = useRecoilState(singleProductState);
  const [application, setApplication] = useRecoilState(applicationState);
  const oneTime = application.meta.plan === plans[1].value;



  const Data = [
    {
      plan: "Down payment",
      color:'#E3000F',
    },
    {
      plan: "1st instalment",
      color:'#8A8A8A',
    },
    {
      plan: "2nd instalment",
      color:'#8A8A8A',
    },
    {
      plan: "3rd instalment",
      color:'#8A8A8A',
    },
];

  return (
    <div className='planCard'>

      <div className='plan-conainer2 grid'>
          
        <div className='planCardAlt-left grid'>
          <CircularProgress value={30} size='120px' color='#E3000F' thickness='16px' className='plan-progress' />
        </div>
        <div className='planCardAlt-right grid'>

              <div className='plan-input grid'>

                <Select
                    className='n-input'
                    disabled={oneTime}
                    onChange={event =>
                      setApplication({
                        ...application,
                        meta: {
                          ...application.meta,
                          terms: {
                            ...application.meta.terms,
                            type: event.target.value,
                          },
                        },
                      })
                    }
                    placeholder="Monthly"
                    maxW="120px"
                >
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </Select>
              <div>

              <Flex>
                  <NumberInput
                   
                    isDisabled={oneTime}
                    size="md"
                    mr=""
                    maxW="60px"
                    max={6}
                    defaultValue={application.meta.terms.tenure}
                    onChange={value =>
                      setApplication({
                        ...application,
                        meta: {
                          ...application.meta,
                          terms: {
                            ...application.meta.terms,
                            tenure: Number(value),
                          },
                        },
                      })
                    }
                    min={1}
                  >
                    <NumberInputField  className='n-input'/>
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>

                  <Select
                    className='n-input'
                    disabled={oneTime}
                    onChange={event =>
                      setApplication({
                        ...application,
                        meta: {
                          ...application.meta,
                          terms: {
                            ...application.meta.terms,
                            type: event.target.value,
                          },
                        },
                      })
                    }
                    placeholder="Select"
                    maxW="120px"
                  >
                    <option value="weeks">Weeks</option>
                    <option value="months">Months</option>
                  </Select>

                </Flex>
              </div>
               
          </div>
          
          <div className='planAlt-keys grid'>

            {Data.map((item, index) => {
            return (
              <div key={index} className='plan-key flex'>
                  <span style={{background:item.color}}></span> <p>{item.plan}</p>
              </div>
            );
            })}

          </div>
          
        </div>

      </div>
    </div>
  )
}

export default PlanCardAlt