import React, { useState } from "react";
import Breadcrumbs from "../Breadcrumb/Breadcrumb";
import Buttonalt from "../Buttonalt/Buttonalt";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { PinInput, PinInputField } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { applicationState } from "../../data/state";

const Detail = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [application, setApplication] = useRecoilState(applicationState);
  return (
    <div className="grid">
      <div className="head">
        <Breadcrumbs />
      </div>

      <div className="Container grid">
        <div className="form-container grid">
          <div className="section-title">
            <h3>Personal details</h3>
            <p>Kindly provide your information in the required fields</p>
          </div>

          <Formik
            initialValues={{ work_email: "" }}
            onSubmit={(values, actions) => {
              setApplication({
                ...application,
                user: {
                  ...application.user,
                  work_email: values.work_email,
                },
              });
              // #TODO: Make a call to api for otp email
              actions.setSubmitting(false);
            }}
          >
            {props => (
              <Form onSubmit={props.handleSubmit}>
                <FormControl isRequired>
                  <FormLabel>Work email</FormLabel>
                  <Input
                    onChange={props.handleChange}
                    value={props.values.work_email}
                    name="work_email"
                    placeholder="Enter your work email"
                  />
                </FormControl>

                <div className="Button grid">
                  <Button
                    isLoading={props.isSubmitting}
                    type="submit"
                    className="btns"
                  >
                    Next
                  </Button>
                </div>
              </Form>
            )}
          </Formik>

          <div className="pin-input">
            <div className="section-title">
              <p>Kindly provide the OTP sent to your email</p>
            </div>

            <Formik
              initialValues={{ otp: "" }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  actions.setSubmitting(false);

                  // verify otp here
                  setIsVerified(true);
                }, 1000);
              }}
            >
              {props => (
                <Form>
                  <PinInput
                    onComplete={() => props.handleSubmit()}
                    onChange={value => {
                      props.setFieldValue("otp", value);
                    }}
                    mask={false}
                    name="otp"
                    value={props.values.otp}
                    otp
                  >
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>

                  <div className="Button grid">
                    <Buttonalt
                      disabled={!isVerified}
                      type="submit"
                      text="Verify"
                      link="/application"
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
