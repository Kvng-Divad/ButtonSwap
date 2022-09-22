import React, { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import "./OTPay.css";
import { FormControl, FormErrorMessage, Image, Select } from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useFormik } from "formik";
import nairaIcon from "../../Assets/naira.png";
import { useNavigate } from "react-router-dom";
import { applicationState } from "../../data/state";
import { useRecoilState } from "recoil";

const defaultValues = { amount: "", plan: "" };

const OTPay = () => {
  const navigate = useNavigate();
  const [application, setApplication] = useRecoilState(applicationState);
  const [initialValues, setInitialValues] = useState(defaultValues);
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: values => {
      setApplication({
        ...application,
        user: {
          ...application.user,
          other: {
            amount: values.amount * 100, // convert to kobo
            plan: values.plan,
          },
        },
      });
      navigate("/verification");
    },
  });

  useEffect(() => {
    setInitialValues({
      amount: application.user.other.amount / 100, // convert to naira,
      plan: application.user.other.plan,
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="otpay">
      <form onSubmit={handleSubmit} className="otp-form grid">
        <div className="otp-input grid">
          <FormControl isInvalid={touched.amount && errors.amount}>
            <label className="labels">Amount</label>

            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Image w="40%" src={nairaIcon} />}
              />
              <Input
                className="i-input"
                type={"number"}
                name="amount"
                value={values.amount}
                onChange={handleChange}
                placeholder="Enter an amount"
              />
              <FormErrorMessage> {errors.amount} </FormErrorMessage>
            </InputGroup>
          </FormControl>
        </div>

        <div className="otp-input grid">
          <label htmlFor="deduct" className="labels">
            Deduct from
          </label>
          <Select className="s-input" disabled={""} placeholder="" id="deduct">
            <option value=""></option>
            <option value=""></option>
          </Select>
        </div>

        <div className="dash-btn grid">
          <Button text="PAY NOW" type={"submit"} />
        </div>
      </form>
    </div>
  );
};

export default OTPay;
