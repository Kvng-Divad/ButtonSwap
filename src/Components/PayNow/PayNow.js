import React, { useEffect, useState } from "react";
import './PayNow.css'
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import EmailDetails from "../../Extras/EmailDetails"
import OTPDetails from "../../Extras/OTPDetails";
//import { useNavigate } from "react-router-dom";
import { applicationState } from "../../data/state";
import { useRecoilState } from "recoil";
//import axios from "axios";
//import { API_URI } from "../../constants";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    //Button,
    Center,
    Alert,
    AlertIcon,
    AlertTitle,
    CloseButton,
    Button,
  } from "@chakra-ui/react";
  import { Formik, Form, Field } from "formik";



const defaultInfo = { message: "", status: "" };

const defaultValues = {
    full_name: "",
    phone_number: "",
    delivery_address: "",
  };

const PayNow = () => {

    const [show, setShow] = useState(false);
    const [click, setClick] = useState(false);
    const authSchema = yup.object({
          full_name:yup.string().min(3, 'full name must be more than 3 characters'),
          phone_number:yup.number().positive().integer(),
          delivery_address:yup.string(),
      });

      // eslint-disable-next-line
        const { handleSubmit } = useForm({
            resolver: yupResolver(authSchema),
        });

        // eslint-disable-next-line
        const [isVerified, setIsVerified] = useState(false);
        //const navigate = useNavigate();
        const [application, setApplication] = useRecoilState(applicationState);
        const [initialValues, setInitialValues] = useState(defaultValues);
        // eslint-disable-next-line
        const [info, setInfo] = React.useState(defaultInfo);



        
        // eslint-disable-next-line
        
          useEffect(() => {
            setInitialValues({
              full_name: application.user.full_name,
              phone_number: application.user.phone_number,
              delivery_address: application.user.delivery_address,
          });
            // eslint-disable-next-line
          }, []);
    
  return (
    <div className="Container2 grid">
        
      <div className="section-head grid">
        {info.message && (
          <Center>
            <Alert
              display={"flex"}
              justifyContent="space-between"
              alignSelf={"center"}
              w={{ base: "90%", md: "50%" }}
              status={info.status}
            >
              <AlertIcon />
              <AlertTitle>{info.message}</AlertTitle>
              <CloseButton onClick={() => setInfo(defaultInfo)} />
            </Alert>
          </Center>
        )}
          <div
            className="hero-icon flex"
            onClick={() => {
              window.history.back();
            }}
          >
            <ChevronLeftIcon className="heroicon" />
          </div>

          <h3 className="hero-title">Payment</h3>
        </div>
        <div className='paynow'>
            <div className='form-container grid'>

                <div className="section-title">
                    <h3>Payment details</h3>
                    <p>Kindly provide your information in the required fields</p>
                </div>

                <Formik
                    initialValues={initialValues}
                    enableReinitialize
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                        setApplication({
                            ...application,
                            user: {
                            ...application.user,
                            ...values,
                            },
                        });
                        actions.setSubmitting(false);
                        }, 1000);
                        
                        }}
                    >
                {({ errors, touched, isSubmitting }) => (
                    <Form className="Form grid" >

                    <Field name="full_name">
                        {({ field }) => (
                        <FormControl isInvalid={touched.full_name && errors.full_name}>
                            <FormLabel>Full Name</FormLabel>
                            <Input {...field} placeholder="Enter your Full Name" 
                            onChange={e => setInitialValues({ full_name: e.target.value })}/>
                            <FormErrorMessage>{errors.full_name}</FormErrorMessage>
                        </FormControl>
                        )}
                    </Field>

                    <Field name="phone_number">
                        {({ field }) => (
                        <FormControl
                            isInvalid={
                            touched.phone_number && errors.phone_number
                            }
                        >
                            <FormLabel>Phone number</FormLabel>
                            <Input
                            {...field}
                            maxLength={11}
                            placeholder="Enter your phone number"
                      
                            onChange={e => setInitialValues({  phone_number: e.target.value })}
                            />
                            <FormErrorMessage>
                            {errors.phone_number}
                            </FormErrorMessage>
                        </FormControl>
                        )}
                    </Field>

                    <Field name="delivery_address">
                        {({ field }) => (
                        <FormControl isInvalid={touched.delivery_address && errors.delivery_address}>
                            <FormLabel>Delivery Address</FormLabel>
                            <Input
                            {...field}
                           
                            onChange={e => setInitialValues({  delivery_address: e.target.value })}
                            placeholder=" Enter your delivery address "
                            />
                            <FormErrorMessage>{errors.delivery_address}</FormErrorMessage>
                        </FormControl>
                        )}
                    </Field>
                          
                    <div className="Button grid">

                      {click ? (
                       <Button
                       isLoading={isSubmitting}
                       type=""
                       className="btns"
                       onClick={() => {
                         setShow(false);
                         setClick(false);
                       }}
                     >
                       Edit
                      </Button>
                        ) : (
                        <Button
                        isLoading={isSubmitting}
                        type="submit"
                        className="btns"
                        onClick={() => {
                          setShow(true);
                          setClick(true);
                        }}
                      >
                        Next
                      </Button>
                      )}
                      
                    </div>

                    </Form>
                )}
                </Formik>

                <div className={show === true ? "verificatio-container  reveal": " verificatio-container hide"}>

                  <Formik
                  initialValues={initialValues}
                  enableReinitialize
                  onSubmit={(values, actions) => {
                  setApplication({
                      ...application,
                      user: {
                      ...application.user,
                      work_email: values.work_email,
                      },
                      
                  });
                      // #TODO: Make a call to api for otp email
                      setInfo({
                          status: "success",
                          message: "Successfully sent you an OTP",
                      });
                      actions.setSubmitting(false);
                  }}
              >
                  {props => (
                  <div>
                      <EmailDetails />
                  </div>
                  )}
                  </Formik>
                  

                  <div className="pin-input">
                      <div className="section-title"></div>

                      <Formik
                      initialValues={{ otp: "" }}
                      onSubmit={(values, actions) => {
                          setTimeout(() => {
                          actions.setSubmitting(false);

                          // verify otp here
                          setInfo({
                              status: "success",
                              message: "Successfully verified your OTP.",
                          });
                          setIsVerified(true);
                          }, 1000);
                      }}
                      >
                      {props => <OTPDetails />}
                      </Formik>
                  </div>

                </div>
            </div>

        </div>
      
    </div>
      
    
  )
}

export default PayNow