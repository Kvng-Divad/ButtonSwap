import { React, useState } from "react";
import { Link } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import Breadcrumbs from "../Breadcrumb/Breadcrumb";
import { useRecoilState } from "recoil";
import { applicationState } from "../../data/state";

const Authenticate = () => {
  const [application, setApplication] = useRecoilState(applicationState);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClick = () => setShow(!show);
  const handleClick2 = () => setShow2(!show2);

  const checkPasswords = (stored, supplied, setFieldError) => {
    if (stored !== supplied) {
      setFieldError("confirmPassword", "passwords do not match");
    }
  };
  return (
    <div>
      <div className="grid">
        <div className="head">
          <Breadcrumbs current={5} />
        </div>
      </div>

      <div className="Container grid">
        <div className="form-container grid">
          <div className="section-title">
            <h3>Account Authentication</h3>
            <p>Password should have at least 8 characters</p>
          </div>

          <div>
            <Formik
              initialValues={{ password: "", confirmPassword: "" }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  setApplication({
                    ...application,
                    user: {
                      ...application.user,
                      password: values.password,
                    },
                  });
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              {props => (
                <Form className="form grid">
                  <Field name="password">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          props.touched.password && props.errors.password
                        }
                      >
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                          <Input
                            {...field}
                            name="password"
                            pr="4.5rem"
                            type={show ? "text" : "password"}
                            placeholder="Enter your password"
                            value={props.values.password}
                            onChange={props.handleChange}
                          />
                          <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                              {show ? "Hide" : "Show"}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                        <FormErrorMessage>
                          {props.errors.password}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="confirmPassword">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          props.touched.confirmPassword &&
                          props.errors.confirmPassword
                        }
                      >
                        <FormLabel>Confirm password</FormLabel>
                        <InputGroup>
                          <Input
                            {...field}
                            pr="4.5rem"
                            type={show2 ? "text" : "password"}
                            placeholder="Confirm your password"
                            onChange={e => {
                              props.handleChange(e);
                              checkPasswords(
                                props.values.password,
                                e.target.value,
                                props.setFieldError
                              );
                            }}
                          />
                          <InputRightElement width="4.5rem">
                            <Button
                              h="1.75rem"
                              size="sm"
                              onClick={handleClick2}
                            >
                              {show2 ? "Hide" : "Show"}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                        <FormErrorMessage>
                          {props.errors.confirmPassword}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <div className="Button grid">
                    <Link to="/checkout" isLoading={props.isSubmitting}>
                      <Button type="submit" className="btns">
                        PLACE ORDER
                      </Button>
                    </Link>
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

export default Authenticate;
