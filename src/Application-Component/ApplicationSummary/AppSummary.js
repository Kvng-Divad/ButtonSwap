import React from "react";
import "./AppSummary.css";
import logo from "./logo.png";
import phone from "./phone.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const AppSummary = () => {
  return (
    <div className="wrapper">
      <h1>Appliction Summary</h1>
      <div className="mainBody">
        <div className="left">
          <div className="mainLeft">
            <img src={logo} alt="" />
            <hr />
            <div className="imageHolder">
              <div className="leftArrow">
                <ChevronLeftIcon />
              </div>
              <div className="Carousel">
                <img src={phone} alt="" />
              </div>
              <div className="rightArrow">
                <ChevronRightIcon />
              </div>
            </div>
            <div className="tabs">
              <div className="tab2"></div>
              <div className="tab1"></div>
              <div className="tab1"></div>
            </div>
            <div className="preDisplay">
              <div className="pre">
                <img src={phone} alt="" />
              </div>
              <div className="pre1">
                <img src={phone} alt="" />
              </div>
              <div className="pre1">
                <img src={phone} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <p>PROFILE</p>
          <div className="box">
            <hr />
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
          <div className="box">
            <hr />
            <span>Bank</span>
            <p>zenith Bank</p>
          </div>
          <div className="box">
            <hr />
            <span>Account number</span>
            <p>3024569087</p>
          </div>
          <div className="box">
            <hr />
            <span>Bank Branch</span>
            <p>9, adetokumbo ademola street</p>
          </div>
          <hr />
          <p className="name">Device</p>
          <div className="box1">
            <hr />
            <span>MODEL</span>
            <p>Iphone 13 Pro</p>
          </div>
          <div className="box">
            <hr />
            <span>CAPACITY</span>
            <p>128GB</p>
          </div>
          <div className="box">
            <hr />
            <span>COLOR</span>
            <div className="holder">
              <div className="circle"></div>
              <p>AIpine Green</p>
            </div>
          </div>
          <div className="box">
            <hr />
            <span>PAYMENT PLAN</span>
            <p>Monthly payment</p>
            <p>3 months</p>
          </div>
          <div className="box2">
            <hr />
            <span>TOTAL PAYMENT</span>
            <div className="paymentHolder">
              <div className="payHold">
                {" "}
                <span className="pay">Down payment</span>
                <div>#110,000</div>
              </div>
              <div className="payHold">
                {" "}
                <span className="pay">1st payment</span>
                <div>#63,500</div>
              </div>
              <div className="payHold">
                {" "}
                <span className="pay">2nd payment</span>
                <div>#63,500</div>
              </div>
              <div className="payHold">
                {" "}
                <span className="pay">3rd payment</span>
                <div>#63,500</div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="btn">
        <div className="bttn">Next</div>
      </div>
    </div>
  );
};

export default AppSummary;
