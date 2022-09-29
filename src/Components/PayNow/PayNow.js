import React, { useEffect, useState } from "react";
import './PayNow.css'
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import EmailDetails from "../../Extras/EmailDetails"
import OTPDetails from "../../Extras/OTPDetails";
import { useNavigate } from "react-router-dom";
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
  } from "@chakra-ui/react";
  import { Formik, Form, Field } from "formik";


const defaultInfo = { message: "", status: "" };

const defaultValues = {
    full_name: "",
    phone_number: "",
    delivery_address: "",
    work_email: ""
  };

const PayNow = () => {
    const authSchema = yup.object({
        name:yup.string(),
        phone_number:yup.number().positive().integer(),
        address:yup.string(),
        email: yup.string().email(),
        otp: yup.number().positive().integer(),
      });

      // eslint-disable-next-line
        const { handleSubmit } = useForm({
            resolver: yupResolver(authSchema),
        });

        // eslint-disable-next-line
        const [isVerified, setIsVerified] = useState(false);
        const navigate = useNavigate();
        const [application, setApplication] = useRecoilState(applicationState);
        const [initialValues, setInitialValues] = useState(defaultValues);
        // eslint-disable-next-line
        const [user, setUser] = useState(defaultValues.user);
        const [info, setInfo] = React.useState(defaultInfo);

        
        // eslint-disable-next-line
        const nextPage = event => {
          event?.preventDefault && event?.preventDefault();
          setApplication({
            ...application,
            user: {
              ...application.user,
              ...user,
            },
          });
          navigate("/checkout");
        };
          useEffect(() => {
            setInitialValues({
                full_name: application.user.full_name,
                phone_number: application.user.phone_number,
                delivery_address: application.user.delivery_address,
                work_email: ""
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
                        //createPersonalDetail(values);
                        actions.setSubmitting(false);
                        }, 1000);
                        }}
                    >
                {({ errors, touched, isSubmitting }) => (
                    <Form className="Form grid">

                    <Field name="name">
                        {({ field }) => (
                        <FormControl isInvalid={touched.name && errors.name}>
                            <FormLabel>Full Name</FormLabel>
                            <Input {...field} placeholder="Enter your Full Name" />
                            <FormErrorMessage>{errors.name}</FormErrorMessage>
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
                            placeholder="Enter your phone number"
                            />
                            <FormErrorMessage>
                            {errors.phone_number}
                            </FormErrorMessage>
                        </FormControl>
                        )}
                    </Field>

                    <Field name="address">
                        {({ field }) => (
                        <FormControl isInvalid={touched.address && errors.address}>
                            <FormLabel>Delivery Address</FormLabel>
                            <Input
                            {...field}
                            maxLength={11}
                            placeholder=" Enter your delivery address "
                            />
                            <FormErrorMessage>{errors.address}</FormErrorMessage>
                        </FormControl>
                        )}
                    </Field>

                    </Form>
                )}
                </Formik>

                <>

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
                </>
            </div>

        </div>
      </div>
    </div>
      
    
  )
}

export default PayNow