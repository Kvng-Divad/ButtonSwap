import "./PaymentDetails.css";

import Buttonalt from "../../Components/Buttonalt/Buttonalt";
import React from "react";

const PaymentDetails = () => {
  return (
    <div className="wrapper">
      <h1 className="name">Payment Details</h1>
      <div className="mainBodyPayment">
        <div className="leftPay">
          <div className="leftHolder">
            <div className="boxe">
              <span className="text">MODEL</span>
              <p>Iphone 13 pro</p>
            </div>
            <div className="boxe">
              <hr />
              <span className="text">CAPACITY</span>
              <p>128GB</p>
            </div>
            <div className="boxe">
              <hr />
              <span className="text">COLOR</span>
              <p>ALphine Green</p>
            </div>
            <div className="boxe">
              <hr />
              <span className="text">PAYMENT PLAN</span>
              <h4>Monthly Payment</h4>
              <div className="detailBottom">
                <p>3 months change</p>
                <button>Change</button>
              </div>
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
                <h1>₦141,500</h1>
              </div>
              <div className="leftList">
                <p>30% Down payment:</p>
                <h4>₦110,000</h4>
              </div>
              <div className="leftList">
                <p>Insurance:</p>
                <h4>₦30,000</h4>
              </div>
              <div className="leftList">
                <p>Shipping(flat rate):</p>
                <h4>₦1,500</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="rightPay">
          <div className="boxe">
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
              <h1>₦65,500</h1>
            </div>
            <div className="leftList">
              <p>30% Down payment:</p>
              <h4>₦110,000</h4>
            </div>
            <div className="leftList">
              <p>Insurance:</p>
              <h4>₦30,000</h4>
            </div>
            <div className="leftList">
              <p>Shipping(flat rate):</p>
              <h4>₦1,500</h4>
            </div>
            <div className="Detailpayment">
              <span>
                <input type="radio" />
              </span>
              <p>Down Payment</p>
              <h1>₦65,500</h1>
            </div>
            <div className="Detailpayment">
              <span>
                <input type="radio" />
              </span>
              <p>Down Payment</p>
              <h1>₦65,500</h1>
            </div>
            <div className="Detailpayment">
              <span>
                <input type="radio" />
              </span>
              <p>Down Payment</p>
              <h1>₦65,500</h1>
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
          <div className="Button1">
            <button>
              <Buttonalt text="PAY NOW" link="/details" />
            </button>{" "}
            <button>SKIP</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
