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
          name: "Why do you need my BVN?",
          description:'We need your BVN to confirm that you aren’t being impersonated and all details provided match with your BVN information.  We understand that this is very sensitive information and take your privacy very seriously.',
        },
        {
          name: "How do I make my first payment?",
          description:'When you get approved, payment can be made via bank transfer or through card.',
        },
        {
          name: "How long does it take to get my phone?",
          description:'Once your application has been completed and approved you will be required to make a downpayment. Once this is done your phone willbe delivered to your doorstep.',
        },
        {
          name: "How long do applications take to get approved?",
          description:'Applications typically take 24 hours to get reviewed.',
        },
        {
          name: "How would I know that my application has been approved?",
          description:'Once your application gets approved, we would send you an application approval email.',
        },
        {
          name: "What should I do if I need help?",
          description:'You can easily reach us on any of our social media platforms and we’ll respond as soon as possible. Alternatively, you can send an email to support@kezaafrica.com.',
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