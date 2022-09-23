import React, { useContext } from "react";
import styled from "styled-components";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { CreateContext } from "./Context";

import OTPInput from "otp-input-react";
import { useNavigate } from "react-router-dom";

const OTPDetail = () => {
  const { authEmail } = useContext(CreateContext);
  const hist = useNavigate();

  const authSchema = yup.object({
    otp: yup.string().required(),
  });
  const [OTP, setOTP] = React.useState("");
  const {
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authSchema),
  });
  const onSubmit = async () => {
    await axios
      .post(
        "https://keza-zenith-staging.herokuapp.com/auth/verify-otp",
        {
          email: authEmail,
          otp: OTP,
        },
        { headers: { "Access-Control-Allow-Origin": "*" } }
      )
      .then((res) => {
        console.log("Awesome... now you are in!", res);

        hist("/application");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Form
        onSubmit={(e) => {
          onSubmit();
          e.preventDefault();
        }}
      >
        <InputHolder>
          <p>Kindly provide the OTP sent to your email</p>

          <OTPInput
            inputStyles={{
              width: "50px",
              border: "1px solid silver",
              borderRadius: "5px",
              height: "40px",
              color: "#000",
              backgroundColor: "white",
              zIndex: "999",
            }}
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={4}
            otpType="any"
            disabled={false}
          />
        </InputHolder>
        <Error>{errors.otp?.message}</Error>

        <br />
        {OTP.length === 4 ? (
          <Button type="submit" bg="darkorange">
            Verify
          </Button>
        ) : (
          <Button disabled type="submit" bg="darkorange">
            Verify
          </Button>
        )}
      </Form>
    </div>
  );
};

export default OTPDetail;

const InputHolder = styled.div`
  position: relative;
  width: 100%;
  margin: 10px 0;
  color: black;
`;

const Button = styled.button`
  background: var(--bg-color-2);
  border: 1px solid var(--skin-color);
  color: var(--text-color-alt);
  font-family: var(--bdy-font-family);
  font-size: var(--font-size-sm);
  font-weight: 600;
  border-radius: 25px;
  padding: 0.65rem 9rem;
  text-transform: uppercase;

  :hover {
    background: transparent;
    border: 1px solid var(--skin-color);
    color: var(--text-color);
  }
  :disabled {
    opacity: 0.4;
  }
  @media (min-width: 780px) {
    button {
      padding: 0.65rem 5rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 20px;
  background: white;
  color: #000;
`;

const Error = styled.div`
  color: red;
`;
