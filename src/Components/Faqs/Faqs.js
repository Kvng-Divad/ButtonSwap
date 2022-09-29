import React, {useState} from 'react'
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
  const [show, setShow] = useState(false);
  const [click, setClick] = useState(false);

    const Data = [
        {
          name: "How does Keza work?",
          description:'Keza is a financing company that enables you to buy smartphones & pay conveniently.   Order online ✅, Your phone is delivered ✅, Monthly payments count ✅',
        },
        {
          name: "How do I apply?",
          description:'You can apply online via our website, it takes two minutes to fill the application form.',
        },
        
        {
          name: "After I apply, what next?",
          description:'After you apply online, Keza will perform necessary credit checks and underwriting to confirm your eligibility. If eligible, you will make a downpayment & your phone is delivered to you',
        },
        {
          name: "What do I need to apply for smartphone finance?",
          description:'BVN, Means of ID, Bank statement',
        },
        {
          name: "Why do you need my BVN?",
          description:'We need your BVN to confirm that you aren’t being impersonated and all details provided match with your BVN information.  We understand that this is very sensitive information and take your privacy very seriously.',
        },
        {
          name: "Is my personal information safe?",
          description:'All information provided is encrypted and handled securely by Keza. It will not be used for any other purposes than what it’s been intended for. So, yes, we assure you that your personal information is safe.',
        },
        {
          name: "What should I do if I need help?",
          description:'You can easily reach us on any of our social media platforms and we’ll respond as soon as possible. Alternatively, you can send an email to support@kezaafrica.com.',
        },
      ]
      
    const Data2 = [
      {
        name: "What type of phones can I get on Keza?",
        description:'Choose from a wide range of phone brands including brand new or pre-owned phones',
      },
      {
        name: "What can I submit instead of my bank statement?",
        description:'There is no alternative document, It is compulsory your bank statement is submitted. We assure you that we have no access to any of your accounts and we’re unable to move money from your account. ',
      },
      {
        name: "Why do you need to review my Bank Statement?",
        description:'We need to confirm that you have a consistent monthly income, you have no pending loans and the monthly repayment amount is convenient for you.        ',
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
        name: "Can I make more than a 30% initial deposit?",
        description:'Yes you can, 30% is the minimum deposit you can pay when applying for a smartphone.',
      },
      {
        name: "What is the minimum battery health I can have for a pre-owned iPhone?",
        description:'The minimum battery health you can have for a pre-owned iPhone is 85%.',
      },
      {
        name: "How do I pay for the delivery of my phone?",
        description:'The delivery fee is added to your initial deposit and it is dependent on your location.',
      },
      {
        name: "Can I change the phone I picked after I've submitted my application?",
        description:'Yes you can, however, it is best you wait for the approval of your application before you change it.',
      },
      {
        name: "Can phones be swapped?",
        description:'We do not swap Phones, however phones can be bought and paid for in installments.',
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

              <Accordion defaultIndex={[0]} allowMultiple className="faqs-accordion grid">
              {Data.map(({name, description}, index) => {
                  return (
                          <AccordionItem className='item' key={index}>
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

              {click ? (
              <button className='seeMore' 
                onClick={() => {
                setShow(false);
                setClick(false);
              }}
              >See Less</button>
               ) : (
              <button className='seeMore'
              onClick={() => {
                setShow(true);
                setClick(true);
              }}
              >See More</button>
            )}

              <Accordion defaultIndex={[]}allowMultiple className={show === true ? "faqs-accordion grid  reveal": " faqs-accordion grid hide"} >
              {Data2.map(({name, description}, index) => {
                  return (
                          <AccordionItem className='item' key={index}>
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