import React from 'react'
import Breadcrumbs from '../Breadcrumb/Breadcrumb'
import './Applications.css'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
  } from '@chakra-ui/react'
import {Formik, Form, Field} from 'formik'
import { Link } from 'react-router-dom'

const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };


const Applications = () => {
      
  return (
    <div className='Container grid'>
        <Breadcrumbs/>

        <div className='section-title'>
            <h3>Personal details</h3>
            <p>Kindly provide your information in the required fields</p>
        </div>

        <div>
            <Formik
                initialValues={[
                { name: '' },
                { AccountNumber: '' },
                { BVN: '' }]}
                onSubmit={onSubmit}
                >
                {(props) => (
                    <Form className='form grid'>

                    <Field name='name' validate={''}>
                        {({ field, form }) => (
                        <FormControl isInvalid={form.errors.name && form.touched.name}>
                            <FormLabel>Name of Bank</FormLabel>
                            <Input {...field} placeholder='Enter your bank name' />
                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                        </FormControl>
                        )}
                    </Field>

                    <Field name='AccountNumber' validate={''}>
                        {({ field, form }) => (
                        <FormControl isInvalid={form.errors.name && form.touched.name}>
                            <FormLabel>Account number</FormLabel>
                            <Input {...field} placeholder='Enter your account number' />
                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                        </FormControl>
                        )}
                    </Field>

                    <Field name='BVN' validate={''}>
                        {({ field, form }) => (
                        <FormControl isInvalid={form.errors.name && form.touched.name}>
                            <FormLabel>BVN</FormLabel>
                            <Input {...field} placeholder=' Enter your bvn ' />
                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                        </FormControl>
                        )}
                    </Field>

                    <div className='Button grid'>
                        <Button
                            isLoading={props.isSubmitting}
                            type='submit'
                            className='btns'
                        >
                            Verify
                        </Button>
                    </div>

                    </Form>
                )}
            </Formik>
        </div>
        
        <div>
            <Formik
                    initialValues={[{ name: '' }, { address: '' }, { number: '' }]}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        actions.setSubmitting(false)
                        }, 1000)
                    }}
                    >
                    {(props) => (
                        <Form className='form grid'>

                        <Field name='name' validate={''}>
                            {({ field, form }) => (
                            <FormControl isInvalid={form.errors.name && form.touched.name}>
                                <FormLabel>Full name</FormLabel>
                                <Input {...field} placeholder='Your full name' />
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                            )}
                        </Field>

                        <Field name='number' validate={''}>
                            {({ field, form }) => (
                            <FormControl isInvalid={form.errors.number && form.touched.number}>
                                <FormLabel>Phone number</FormLabel>
                                <Input {...field} placeholder='Your phone number ' />
                                <FormErrorMessage>{form.errors.number}</FormErrorMessage>
                            </FormControl>
                            )}
                        </Field>

                        <Field name='address' validate={''}>
                            {({ field, form }) => (
                            <FormControl isInvalid={form.errors.address && form.touched.address}>
                                <FormLabel>Delivery address</FormLabel>
                                <Input {...field} placeholder='Your delivery address ' />
                                <FormErrorMessage>{form.errors.address}</FormErrorMessage>
                            </FormControl>
                            )}
                        </Field>

                        <div className='Button grid'>
                            <Link to='/income'>
                                <Button
                                isLoading={props.isSubmitting}
                                type='submit'
                                className='btns'
                            >
                                Next
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

export default Applications