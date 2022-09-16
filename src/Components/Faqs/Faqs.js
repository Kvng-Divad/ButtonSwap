import React from 'react'
import './Faqs.css'
import Faq from '../../Assets/Faqs.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
  } from '@chakra-ui/react'
import { MinusIcon, AddIcon} from '@chakra-ui/icons'
import { Box } from "@chakra-ui/react"







const Faqs = () => {
  

    const Data = [
        {
          name: "What type of phones can I get on Keza?",
          description:'Choose from a wide range of phone brands including brand new or pre-owned phones',
        },
        {
          name: "How many monthly instalments do i get?",
          description:'Check your eligibility and fill the application form for a convenient payment plan',
        },
        {
          name: "Can i get pre-owned phones?",
          description:'Make your first payment after your application has been approved to get your phone delivered.',
        },
        {
          name: "How long does it take to get my phone?",
          description:'Once your application has been completed and approved you will be required to make a downpayment. Once this is done your phone willbe delivered to your doorstep.',
        },
        {
          name: "What products are available?",
          description:'Make your first payment after your application has been approved to get your phone delivered.',
        },
      ]

  return ( 
    <div className="faqs grid" id='faqs'>
      
        <div className="faqs-container grid">

            <div className='hero'>
              <img src={Faq} alt='faqs'/>

              <div className='overlay flex'>
                <h3>KEZA SMARTPHONE FINANCE</h3>
                <p>Pay conveniently for a smartphone in monthly instalments</p>

                <Link to='/products'>
                  <button className='btn-alt'>
                        Apply Now
                  </button>
                </Link>
              </div>

              
            </div>

            <div className='right grid'>

              <div className="title grid">
                  <h3>FREQUENTLY ASKED QUESTIONS</h3>
                  <p>We have answers to some questions you may have</p>
              </div>

              <Accordion allowMultiple className="faqs-accordion grid">
              {Data.map(({name, description}) => {
                  return (
                          <AccordionItem className='item'>
                          {({ isExpanded }) => (
                              <>
                                  <h2 className='item-title'>
                                  <AccordionButton className='item-box flex' >
                                      <Box flex='1' textAlign='Left'>
                                      {name}
                                      </Box>
                                      {isExpanded ? (
                                      <MinusIcon fontSize='12px' />
                                      ) : (
                                      <AddIcon fontSize='12px' />
                                      )}
                                  </AccordionButton>
                                  </h2>
                                  <AccordionPanel pb={4} className='item-description'>
                                  {description}
                                  </AccordionPanel>
                              </>
                              )}
                          </AccordionItem>          
                  );
                      })}
              </Accordion>
            </div>
            
        </div>

        <Button text='start phone plan'/>
         
    </div>
  )
}

export default Faqs