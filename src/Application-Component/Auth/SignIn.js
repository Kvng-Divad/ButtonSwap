import React from "react";
import styled from "styled-components";

const SignIn = () => {
  return (
    <Container>
      <TextHolder>
        {" "}
        <Text>Sign In</Text>
        <SmallText>Sign in to your account</SmallText>
      </TextHolder>
      <Wrapper>
        <Form>
          <FormHolder>
            <Label>Work email</Label>
            <input />
          </FormHolder>
          <FormHolder>
            <Label>Password</Label>
            <input />
          </FormHolder>
          <Forget>Forget password?</Forget>
        </Form>
        <Button>SIGN IN</Button>
      </Wrapper>
    </Container>
  );
};

export default SignIn;

const Container = styled.div`
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
  font-size: 20px;
`;

const SmallText = styled.div`
  font-size: 13px;
`;

const Wrapper = styled.div`
  height: 300px;
  width: 400px;
  display: flex;
  align-items: center;
  border-radius:5px;
  flex-direction: column;
  background: var(--text-color-alt2);
  justify-content: space-around;

  @media screen and (max-width: 425px) {
 width: 90%;
`;

const Form = styled.div`
  margin-top: 20px;
`;

const FormHolder = styled.div`
  margin-top: 10px;
  input {
    width: 300px;
    height: 35px;
    background: var(--text-color-alt2);
    border-radius: 4px;
    border: 1px solid lightgray;
    @media screen and (max-width: 375px) {
      width: 250px;
    }
  }
`;

const Label = styled.div``;

const Forget = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  color: var(--skin-color);
  cursor: pointer;
`;

const Button = styled.div`
  height: 32px;
  width: 300px;
  display: flex;
  color: white;
  font-weight: bold;
  background: var(--bg-color-2);
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
  @media screen and (max-width: 375px) {
    width: 250px;
  }
`;
