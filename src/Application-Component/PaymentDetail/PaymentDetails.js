import "./PaymentDetails.css";

import Buttonalt from "../../Components/Buttonalt/Buttonalt";
import React from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useUserContext } from "../../App";
import { conveneNumber } from "../../utils";

const PaymentDetails = () => {
  const { user, application } = useUserContext();
  return (
    <div className="wrapper">
      <div className="section-head grid">
        <div
          className="hero-icon flex"
          onClick={() => {
            window.history.back();
          }}
        >
          <ChevronLeftIcon className="heroicon" />
        </div>

        <h3 className="hero-title">Payment Details</h3>
      </div>
      <div className="mainBodyPayment">
        <div className="leftPay">
          <div className="leftHolder">
            <div className="box">
              <span>Full Name</span>
              <p>{user?.full_name}</p>
            </div>
            <div className="box">
              <hr />
              <span>work email</span>
              <p>{user?.work_email}</p>
            </div>
            <div className="box">
              <hr />
              <span>phone number</span>
              <p>{user?.phone_number}</p>
            </div>
            <div className="box">
              <hr />
              <span>delivery address</span>
              <p>{user?.delivery_address}</p>
            </div>
            <hr />
          </div>
          <div className="paymentLeft">
            <h3>TOTAL PAYMENT</h3>
            <div className="payment-details">
              <div className="top-payment">
                <span>
                  <input type="radio" />
                </span>
                <p>Down Payment</p>
                <h1>{conveneNumber(application?.payment?.down / 100 || 0)}</h1>
              </div>
              {[...Array(application?.meta?.terms?.tenure || 0).keys()].map(
                number => {
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
                    <div key={number} className="leftList">
                      <p>{ordinal} montly payment:</p>
                      <h4>
                        {conveneNumber(
                          application?.payment?.dividend / 100 || 0
                        )}
                      </h4>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>

        <div className="rightPay">
          <div className="box">
            <p>select payment method</p>
            <hr />
          </div>
          <h3>TOTAL PAYMENT</h3>
          <div className="payment-details">
            <div className="Detailpayment">
              <span>
                <input type="radio" />
              </span>
              <p>Down Payment</p>
              <h1>{conveneNumber(application?.payment?.down / 100 || 0)}</h1>
            </div>
            {/* <div className="leftList">
              <p>1st montly payment:</p>
              <h4>₦63,500</h4>
            </div>
            <div className="leftList">
              <p>2nd montly payment:</p>
              <h4>₦63,500</h4>
            </div>
            <div className="leftList">
              <p>3rd montly payment:</p>
              <h4>₦63,500</h4>
            </div> */}

            {[...Array(application?.meta?.terms?.tenure || 0).keys()].map(
              number => {
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
                  <div key={number} className="Detailpayment">
                    <span>
                      <input type="radio" />
                    </span>
                    <p>{ordinal} montly payment:</p>
                    <h1>
                      {conveneNumber(application?.payment?.dividend / 100 || 0)}
                    </h1>
                  </div>
                );
              }
            )}
          </div>
          <div className="rightBottom">
            <h5>or</h5>
            <div className="inputHolder">
              <label>Make custom payment</label>
              <div className="input">
                <span>₦</span>
                <input placeholder="Enter the amount" />
              </div>
              <span>This amount should exceed: ₦141,500</span>
            </div>
          </div>
          <div className="buttons">
            <button>
              <Buttonalt text="Next" link="" />
            </button>

            <button>SKIP</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
