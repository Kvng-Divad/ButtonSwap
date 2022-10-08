import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useLoginUser } from "../../operations/auth.operation";
import { useRecoilState } from "recoil";
import { authTokenState } from "../../data/state";

const SignIn = () => {
  const { loginUser, loginUserResult } = useLoginUser();
  const [, setToken] = useRecoilState(authTokenState);
  const handleLoginUser = identity => {
    loginUser(identity)
      .then(res => {
        if (res.data?.ok) {
          setToken(res.data?.payload?.token);
          window.location.replace("/dashboard");
        }
      })
      .catch(error => {
        const message = error?.response?.data
          ? error?.response?.data?.message
          : error?.message;
        toast(message, { type: "error" });
      });
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: values => {
      handleLoginUser(values);
    },
  });

  const inputStyles = {
    padding: "10px",
  };

  return (
    <Container>
      <TextHolder>
        {" "}
        <Text>Welcome</Text>
        <SmallText>Sign in to your account</SmallText>
      </TextHolder>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <FormHolder>
            <Labels>Work email</Labels>
            <input
              style={inputStyles}
              name="username"
              type="text"
              value={values.username}
              onChange={handleChange}
            />
          </FormHolder>
          <FormHolder>
            <Labels>Password</Labels>
            <input
              style={inputStyles}
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
            />
          </FormHolder>
          <Forget>Forget password?</Forget>
          <Button type="submit">
            {loginUserResult.isLoading ? "Logging in..." : "Login"}
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SignIn;

const Container = styled.div`
  margin: 7rem 0;
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 375px) {
    height: 80vh;
  }
`;

const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 30px;
`;

const Text = styled.div`
  font-weight: bold;
  font-size: var(--font-size-m);
`;

const SmallText = styled.div`
  font-size: var(--font-size-sm);
  color: var(text-color);
  opacity: 0.7;
`;

const Wrapper = styled.div`
  height: 400px;
  width: 60%;
  display: flex;
  align-items: center;
  border-radius: 5px;
  flex-direction: column;
  background: #fafafa;
  justify-content: space-around;

  @media screen and (max-width: 425px) {
    width: 90%;
  }
`;

const Form = styled.form`
  width: unset;
  margin: 20px 0 0 0;
`;

const FormHolder = styled.div`
  margin-top: 10px;
  input {
    width: 500px;
    height: 35px;
    background: #fafafa;
    border-radius: 4px;
    border: 1px solid lightgray;
    @media screen and (max-width: 768px) {
      width: 350px;
    }
    @media screen and (max-width: 375px) {
      width: 250px;
    }
    @media screen and (max-width: 320px) {
      width: 225px;
    }
  }
`;

const Labels = styled.div`
  font-size: var(--font-size-nr);
`;

const Forget = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  color: var(--skin-color);
  cursor: pointer;
  font-size: var(--font-size-sm);
`;

const Button = styled.button`
  height: 40px;
  width: 150px;
  display: flex;
  color: white;
  font-weight: 700;
  background: var(--bg-color-2);
  justify-content: center;
  align-items: center;
  border: 1px solid var(--skin-color);
  border-radius: 20px;
  cursor: pointer;
  @media screen and (max-width: 375px) {
    width: 200px;
  }
  :hover {
    color: var(--text-color);
    border: 1px solid var(--skin-color);
    background: white;
  }
`;
