import {React , useState}from 'react'
import './Authenticate.css'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import {Link} from 'react-router-dom'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react'
import {Formik, Form, Field} from 'formik'

const Authenticate = () => {

  function validateName(value) {
    let error
    if (!value) {
      error = 'Name is required'
    } else if (value.toLowerCase() !== 'naruto') {
      error = "Jeez! You're not a fan 😱"
    }
    return error
  }

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClick = () => setShow(!show);
    const handleClick2 = () => setShow2(!show2);
  return (
    <div className='Container grid'>

        <div className='breadcrumb-container grid'>
          <div className='hero-section grid'>
            <div className='hero-icon flex'>
              <Link to='/'><ChevronLeftIcon className='heroicon'/></Link>
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
            <div isCurrentPage className='breadcrumbItem flex isCurrentPage'>
              <Link to='' className='breadcrumbLink'>3</Link>
            </div>
            <div className='seperator isCurrentPage'></div>
            <div className='breadcrumbItem flex isCurrentPage'>
              <Link to='' className='breadcrumbLink'>4</Link>
            </div>
          </div>
        </div>

        <div className='section-title'>
          <h3>Account Authentication</h3>
          <p>Kindly provide your information in the required fields</p>
        </div>
        
        <div >
          <Formik
              initialValues={[{ Password:'' },{ Password2:'' }] }
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                  actions.setSubmitting(false)
                }, 1000)
              }}
            >
              {(props) => (
                <Form className='form grid'>

                  <Field name='Password' validate={validateName}>
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.Password && form.touched.Password}>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                          <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter your password'
                            {...field}
                          />
                          <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                              {show ? 'Hide' : 'Show'}
                            </Button>
                          </InputRightElement>
                          </InputGroup>
                        <FormErrorMessage>{form.errors.Password}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name='Password2' validate={validateName}>
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.Password2 && form.touched.Password2}>
                        <FormLabel>Confirm password</FormLabel>
                        <InputGroup>
                          <Input
                            pr='4.5rem'
                            type={show2 ? 'text' : 'password'}
                            placeholder='Confirm your password'
                            {...field}
                          />
                          <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick2}>
                              {show2 ? 'Hide' : 'Show'}
                            </Button>
                          </InputRightElement>
                          </InputGroup>
                        <FormErrorMessage>{form.errors.Password2}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <div className='Button grid'>

                          <Link to='/checkout' isLoading={props.isSubmitting}>
                            <Button
                                type='submit'
                                className='btns'
                            >
                                PLACE ORDER
                            </Button>
                          </Link>
                          
                  </div>

                </Form>
              )}
          </Formik>
        </div>
    </div>
  )
}

export default Authenticate