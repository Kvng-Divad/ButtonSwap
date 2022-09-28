import "./Income.css";
import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormErrorMessage,
  Image,
  Select,
  Text,
} from "@chakra-ui/react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import Buttonalt from "../Buttonalt/Buttonalt";
import Breadcrumbs from "../Breadcrumb/Breadcrumb";
import nairaIcon from "../../Assets/naira.png";
import { useFormik } from "formik";
import { applicationState } from "../../data/state";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { conveneNumber } from "../../utils";
import banks from "../../constants/bank-array";
const defaultValues = { monthly_income: "", bank_branch: "" };

const Incomes = () => {
  const navigate = useNavigate();
  const [application, setApplication] = useRecoilState(applicationState);
  const [initialValues, setInitialValues] = useState(defaultValues);
  const { values, errors, touched, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues,
      enableReinitialize: true,
      onSubmit: (values) => {
        setApplication({
          ...application,
          user: {
            ...application.user,
            other: {
              monthly_income: values.monthly_income * 100, // convert to kobo
              bank_branch: values.bank_branch,
            },
          },
        });
        navigate("/verification");
      },
    });

  useEffect(() => {
    setInitialValues({
      monthly_income: application.user.other.monthly_income / 100, // convert to naira,
      bank_branch: application.user.other.bank_branch,
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="grid">
        <div className="head">
          <Breadcrumbs current={3} />
        </div>
      </div>

      <div className="Container grid">
        <div className="form-container grid">
          <div className="section-title">
            <h3>Other information</h3>
            <p>Kindly provide your information in the required fields</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input grid">
              <FormControl
                isInvalid={touched.monthly_income && errors.monthly_income}
              >
                <label className="label">Monthly income</label>

                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<Image w="80%" src={nairaIcon} />}
                  />
                  <Input
                    type={"number"}
                    name="monthly_income"
                    value={values.monthly_income}
                    onChange={handleChange}
                    placeholder="How much do you earn in a month?"
                  />
                  <InputRightElement w={{ base: "44%", md: "22%" }}>
                    <Text w="100%">{conveneNumber(values.monthly_income)}</Text>
                  </InputRightElement>
                  <FormErrorMessage> {errors.monthly_income} </FormErrorMessage>
                </InputGroup>
              </FormControl>
            </div>

            <div className="input grid">
              <FormControl>
                <label className="label">Bank Branch</label>

                <Select
                  placeholder="Where is your bank located?"
                  spacing={3}
                  name="bank_branch"
                  value={values.bank_branch}
                  onChange={(event) =>
                    setFieldValue("bank_branch", event.target.value)
                  }
                  className="filter"
                  size="lg"
                >
                  {banks.map((bank) => (
                    <option
                      style={{ textTransform: "uppercase" }}
                      key={bank}
                      value={bank}
                    >
                      {bank}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage> {errors.bank_branch} </FormErrorMessage>
              </FormControl>
            </div>

            <div className="Button grid">
              <Buttonalt text="NEXT" type={"submit"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Incomes;
