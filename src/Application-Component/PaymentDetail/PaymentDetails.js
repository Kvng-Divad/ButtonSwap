import React from "react";
import "./PaymentDetails.css";

const PaymentDetails = () => {
  return (
    <div className="wrapper">
      <h1>Payment Details</h1>
      <div className="mainBodyPayment">
        <div className="leftPay">
          <div className="leftHolder">
            <div className="box">
              <span>Full Name</span>
              <p>jeremimah jane johnson</p>
            </div>
            <div className="box">
              <hr />
              <span>work email</span>
              <p>jemimah@gmmail.com</p>
            </div>
            <div className="box">
              <hr />
              <span>phone number</span>
              <p>07082254216</p>
            </div>
            <div className="box">
              <hr />
              <span>delivery address</span>
              <p>42, canaan street, osberre 2 estate, ikoyi, lagos</p>
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
                <h1>₦110,000</h1>
              </div>
              <div className="leftList">
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
              </div>
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
              <h1>₦110,000</h1>
            </div>
            <div className="leftList">
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
            </div>
            <div className="Detailpayment">
              <span>
                <input type="radio" />
              </span>
              <p>Down Payment</p>
              <h1>₦110,000</h1>
            </div>
            <div className="Detailpayment">
              <span>
                <input type="radio" />
              </span>
              <p>Down Payment</p>
              <h1>₦110,000</h1>
            </div>
            <div className="Detailpayment">
              <span>
                <input type="radio" />
              </span>
              <p>Down Payment</p>
              <h1>₦110,000</h1>
            </div>
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
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
