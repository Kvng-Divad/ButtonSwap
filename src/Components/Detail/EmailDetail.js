import React, { useContext } from "react";
import styled from "styled-components";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { CreateContext } from "./Context";
import { Center } from "@chakra-ui/react";

import { useRecoilState } from "recoil";
import { applicationState } from "../../data/state";
import { Alert, AlertIcon, AlertTitle, CloseButton } from "@chakra-ui/react";
const defaultInfo = { message: "", status: "" };
const EmailDetail = () => {
  const { setEmail, authEmail } = useContext(CreateContext);
  const [checkEmail, setCheckEmail] = React.useState("");
  const [result, setResut] = React.useState();
  // eslint-disable-next-line
  const [application, setApplication] = useRecoilState(applicationState);
  // eslint-disable-next-line
  const [info, setInfo] = React.useState(defaultInfo);
  console.log("this is the checkmail", authEmail);

  const authSchema = yup.object({
    email: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(authSchema),
  });

  const onSubmit = handleSubmit(async data => {
    const { email } = data;
    setEmail(email);

    await axios
      .post(
        "https://keza-zenith-staging.herokuapp.com/auth/request-otp",
        {
          email,
        },
        { headers: { "Access-Control-Allow-Origin": "*" } }
      )
      .then(res => {
        reset();
        console.log(res);
        setResut(res);
        console.log("this is res", result);
      })
      .catch(err => {});
  });
  return (
    <div>
      {result?.data?.message && (
        <Center>
          <Alert
            display={"flex"}
            justifyContent="space-between"
            alignSelf={"center"}
            w={{ base: "90%", md: "50%" }}
          >
            <AlertIcon />
            <AlertTitle>{result?.data?.message}</AlertTitle>
            <CloseButton onClick={() => setInfo(defaultInfo)} />
          </Alert>
        </Center>
      )}
      <Form onSubmit={onSubmit}>
        <Text></Text>
        <InputHolder>
          <MailText>
            Work email <span>*</span>
          </MailText>
          <Blocker></Blocker>
          <Input
            {...register("email")}
            onChange={e => {
              setCheckEmail(e.target.value);
            }}
            placeholder="Enter Email"
          />
        </InputHolder>
        <Error>{errors.email?.message}</Error>

        <br />
        {checkEmail === "" ? (
          <Button
            style={{
              cursor: "not-allowed",
            }}
            disabled
            type="submit"
          >
            Next
          </Button>
        ) : (
          <Button type="submit">{isSubmitting ? "Loading..." : "Next"}</Button>
        )}
      </Form>
    </div>
  );
};

export default EmailDetail;

const MailText = styled.div`
  font-weight: bold;

  span {
    color: red;
  }
`;

const Blocker = styled.div`
  position: absolute;
  top: -3px;
  background-color: white;
  padding: 0 5px;
  font-size: 12px;
  left: 10px;
  color: #004080;
`;

const InputHolder = styled.div`
  position: relative;
  width: 100%;
  margin: 10px 0;
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

const Text = styled.div`
  display: flex;
  font-size: 18px;
  text-transform: uppercase;
  margin-top: 50px;
  /* margin-bottom: 20px; */
  font-weight: 700;
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid silver;
  height: 45px;
  margin: 5px 0;
  border-radius: 5px;
  padding-left: 10px;

  ::placeholder {
    font-family: Poppins;
  }
`;

const Form = styled.form`
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 20px;
  background: white;

  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
		rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
`;

const Error = styled.div`
  color: red;
`;
