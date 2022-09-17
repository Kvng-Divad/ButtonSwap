import React, { useEffect, useState } from "react";
import Breadcrumbs from "../Breadcrumb/Breadcrumb";
import Buttonalt from "../Buttonalt/Buttonalt";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { PinInput, PinInputField } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { applicationState } from "../../data/state";
import { Alert, AlertIcon, AlertTitle, CloseButton } from "@chakra-ui/react";

const defaultInfo = { message: "", status: "" };

const Detail = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [application, setApplication] = useRecoilState(applicationState);
  const [info, setInfo] = useState(defaultInfo);
  const [initialValues, setInitialValues] = useState({ work_email: "" });

  useEffect(() => {
    setInitialValues({
      work_email: application.user.work_email,
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="grid">
      <div className="head">
        <Breadcrumbs />
      </div>
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
      <div className="Container grid">
        <div className="form-container grid">
          <div className="section-title">
            <h3>Personal details</h3>
            <p>Kindly provide your information in the required fields</p>
          </div>

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
                    disabled={
                      props.values.work_email === application.user.work_email
                    }
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
                  setInfo({
                    status: "success",
                    message: "Successfully verified your OTP.",
                  });
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
                      disabled={!isVerified && !application.user.work_email}
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
