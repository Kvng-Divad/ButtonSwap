import "./CheckOut.css";
import React from "react";
import Buttonalt from "../Buttonalt/Buttonalt";
import Breadcrumbs from "../Breadcrumb/Breadcrumb";
import { useRecoilState } from "recoil";
import {
  applicationState,
  authTokenState,
  singleProductState,
} from "../../data/state";
import conveneNumber from "../../utils/convene-number";
import axios from "axios";
import { API_URI } from "../../constants";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const navigate = useNavigate();
  const [application] = useRecoilState(applicationState);
  const [product] = useRecoilState(singleProductState);
  const [, setToken] = useRecoilState(authTokenState);
  // const logo = product?.brand?.image;
  const model = product?.name;
  // const image = product?.meta?.images?.find(
  //   image => image?.image?.length > 1
  // )?.image;
  const capacity = application.product.capacity;
  const color = application.product.color;
  const paymentPlan =
    application.meta.plan === "recurring"
      ? `${
          application.meta.terms.type === "weeks" ? "Weekly" : "Monthly"
        } Payment`
      : "One-time Payment";
  const paymentTerms = `${
    application.meta.terms.tenure
  } ${application.meta.terms.type.substring(
    0,
    application.meta.terms.type.length -
      (application.meta.terms.tenure === 1 ? 1 : 0)
  )}`;

  const tenure = application.meta.terms.tenure;
  const down = application.payment.down;
  const dividend = application.payment.dividend;
  axios.defaults.withCredentials = true;

  const createApplication = () => {
    axios
      .post(`${API_URI}/applications/create-application`, application)
      .then(res => {
        setToken(res.data.payload.token);
        navigate("/submit");
      });

    axios.defaults.withCredentials = true;
  };

  return (
    <div>
      <div className="grid">
        <div className="head">
          <Breadcrumbs current={6} />
        </div>
      </div>

      <div className="Container grid">
        <div className="section-title">
          <h3>Order Summary</h3>
          <p>Kindly confirm your order details</p>
        </div>

        <div className="form-container grid">
          <div className="order-summary grid">
            <div className="order-details grid">
              <h4>MODEL</h4>
              <p>{model}</p>
            </div>

            <div className="order-details">
              <h4>CAPACITY</h4>
              <p>{capacity}</p>
            </div>

            <div className="order-details">
              <h4>COLOR</h4>
              <p>{color}</p>
            </div>

            <div className="order-details">
              <h4>PAYMENT PLAN</h4>
              <p>{paymentPlan}</p>
              <p>{paymentTerms}</p>
            </div>
          </div>

          <div className="payment">
            <h3>TOTAL PAYMENT</h3>
            <div className="payment-details">
              <div className="top-pay">
                <span>
                  <input type="radio" />
                </span>
                <p>Down Payment</p>
                <h1>{conveneNumber(down)}</h1>
              </div>
              <div className="main-payment">
                {[...Array(tenure).keys()].map(number => {
                  const cardinal = Number(String(number + 1).slice(-1));
                  const ordinal = `${number + 1}${
                    cardinal === 1
                      ? "st"
                      : cardinal === 2
                      ? "nd"
                      : cardinal === 3
                      ? "rd"
                      : "th"
                  }`;
                  return (
                    <div key={number} className="list">
                      <span />
                      <p>{ordinal} monthly payment:</p>
                      <h4> {conveneNumber(dividend / 100)}</h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <Buttonalt text="Finish" onClick={createApplication} />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
