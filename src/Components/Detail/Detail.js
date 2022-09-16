import React from 'react'
import Breadcrumbs from '../Breadcrumb/Breadcrumb'
import Buttonalt from '../Buttonalt/Buttonalt'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react'
import {Form, Formik} from 'formik'
import { PinInput, PinInputField,} from '@chakra-ui/react'


const Detail = () => {

  

  return (

    <div className='grid'>
        
      <div className='head'>
          <Breadcrumbs/>
      </div>
      

      <div className='Container grid'>

      <div className='form-container grid'>

        <div className='section-title'>
              <h3>Personal details</h3>
              <p>Kindly provide your information in the required fields</p>
        </div>

          <Formik
                      initialValues={{ name: '' }}
                      onSubmit={(values, actions) => {
                          setTimeout(() => {
                          alert(JSON.stringify(values, null, 2))
                          actions.setSubmitting(false)
                          }, 1000)
                      }}
                      >
                      {(props) => (
                      <Form>        
                        <FormControl isRequired>
                          <FormLabel>Work email</FormLabel>
                          <Input placeholder='Enter your work email' />
                        </FormControl>

                        <div className='Button grid'>
                          <Button
                              isLoading={props.isSubmitting}
                              type='submit'
                              className='btns'
                          >
                            Next
                          </Button>
                        </div>

                      </Form>
                  )}
          </Formik>
          
          <div className='pin-input'>

            <div className='section-title'>
              <p>Kindly provide the OTP sent to your email</p>
            </div>

            
                <Formik
                      initialValues={{ name: '' }}
                      onSubmit={(values, actions) => {
                          setTimeout(() => {
                          alert(JSON.stringify(values, null, 2))
                          actions.setSubmitting(false)
                          }, 1000)
                      }}
                      >
                      {(props) => (
                      <Form>
                        
                          <PinInput otp>
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                          </PinInput>
                      
                      

                          <div className='Button grid'>
                            <Buttonalt text='Verify' link='/application'/>
                          </div>
                    </Form>
                )}
                </Formik>
                                  
          </div>
          </div>

      </div>
      
    </div>
  )
}

export default Detail