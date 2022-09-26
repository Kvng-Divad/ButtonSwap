import React, { useState } from "react";
import Breadcrumbs from "../Breadcrumb/Breadcrumb";
import { Center } from "@chakra-ui/react";
import { Formik } from "formik";
import { useRecoilState } from "recoil";
import { applicationState } from "../../data/state";
import { Alert, AlertIcon, AlertTitle, CloseButton } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import OTPDetail from "./OTPDetail";
import EmailDetail from "./EmailDetail";
const defaultInfo = { message: "", status: "" };

const Detail = () => {
  const authSchema = yup.object({
    email: yup.string(),
    otp: yup.number().positive().integer(),
  });

  // eslint-disable-next-line
  const { handleSubmit } = useForm({
    resolver: yupResolver(authSchema),
  });

  // eslint-disable-next-line
  const [isVerified, setIsVerified] = useState(false);
  const [application, setApplication] = useRecoilState(applicationState);
  const [info, setInfo] = useState(defaultInfo);
  // eslint-disable-next-line
  const [initialValues, setInitialValues] = useState({ work_email: "" });

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
              <div>
                <EmailDetail />
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
              {props => <OTPDetail />}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
