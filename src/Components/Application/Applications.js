import React, { useEffect, useState } from "react";
import Breadcrumbs from "../Breadcrumb/Breadcrumb";
import "./Applications.css";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Center,
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { applicationState } from "../../data/state";
import { useRecoilState } from "recoil";
import axios from "axios";
import { API_URI } from "../../constants";

const defaultValues = {
  bank: "",
  account_number: "",
  bvn: "",
  user: {
    full_name: "",
    phone_number: "",
    delivery_address: "",
    gender: "",
  },
};

const defaultInfo = { message: "", status: "" };

const Applications = () => {
  const navigate = useNavigate();
  const [application, setApplication] = useRecoilState(applicationState);
  const [initialValues, setInitialValues] = useState(defaultValues);
  const [user, setUser] = useState(defaultValues.user);
  const [info, setInfo] = React.useState(defaultInfo);

  const createPersonalDetail = async values => {
    axios
      .get(
        `${API_URI}/auth/fetch-user-details/?account_number=${values.account_number}&bvn=${values.bvn}`
      )
      .then(res => {
        const {
          bvn: {
            firstname,
            lastname,
            middlename,
            gender,
            residential_address: delivery_address,
            phone: phone_number,
          },
        } = res;
        const full_name = `${firstname} ${middlename} ${lastname}`;
        setUser({
          full_name,
          phone_number,
          delivery_address,
          gender,
        });
      })
      .catch(err => {
        const message = err?.response?.data
          ? err?.response?.data?.message ===
            "Something went wrong: BVN not found. Provide a valid BVN"
            ? "Sorry, we can't get your details at this time, please proceed."
            : err?.response?.data?.message
          : err?.message;
        setInfo({ message, status: "error" });
      });

    axios.defaults.withCredentials = true;
  };

  const nextPage = event => {
    event?.preventDefault && event?.preventDefault();
    setApplication({
      ...application,
      user: {
        ...application.user,
        ...user,
      },
    });
    navigate("/income");
  };

  useEffect(() => {
    setInitialValues({
      bank: application.user.bank,
      account_number: application.user.account_number,
      bvn: application.user.bvn,
    });
    setUser({
      full_name: application.user.full_name,
      phone_number: application.user.phone_number,
      delivery_address: application.user.delivery_address,
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="grid">
      <div className="head">
        <Breadcrumbs current={2} />
      </div>
      {info?.message && (
        <Center>
          <Alert
            display={"flex"}
            justifyContent="space-between"
            alignSelf={"center"}
            w={{ base: "90%", md: "50%" }}
            status={info.status}
          >
            <AlertIcon />
            <AlertTitle>{info?.message}</AlertTitle>
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

          <div>
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
                  createPersonalDetail(values);
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form>
                  <Field name="bank">
                    {({ field }) => (
                      <FormControl isInvalid={touched.bank && errors.bank}>
                        <FormLabel>Name of Bank</FormLabel>
                        <Input {...field} placeholder="Enter your bank name" />
                        <FormErrorMessage>{errors.bank}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="account_number">
                    {({ field }) => (
                      <FormControl
                        isInvalid={
                          touched.account_number && errors.account_number
                        }
                      >
                        <FormLabel>Account number</FormLabel>
                        <Input
                          {...field}
                          placeholder="Enter your account number"
                        />
                        <FormErrorMessage>
                          {errors.account_number}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="bvn">
                    {({ field }) => (
                      <FormControl isInvalid={touched.bvn && errors.bvn}>
                        <FormLabel>BVN</FormLabel>
                        <Input
                          {...field}
                          maxLength={11}
                          placeholder=" Enter your bvn "
                        />
                        <FormErrorMessage>{errors.bvn}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <div className="Button grid">
                    <Button
                      isLoading={isSubmitting}
                      type="submit"
                      className="btns"
                    >
                      Verify
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          <div>
            <div className="section-title" style={{ marginBottom: "10px" }}>
              <p>Kindly confirm that you have the correct details below</p>
            </div>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input
                value={user.full_name}
                onChange={e => setUser({ ...user, full_name: e.target.value })}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input
                value={user.phone_number}
                onChange={e =>
                  setUser({ ...user, phone_number: e.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Delivery Addres</FormLabel>
              <Input
                value={user.delivery_address}
                onChange={e =>
                  setUser({ ...user, delivery_address: e.target.value })
                }
              />
            </FormControl>
            <div className="Button grid">
              <Button onClick={nextPage} type="submit" className="btns">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;
