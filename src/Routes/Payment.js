import React from "react";
import OTPay from "../Dashboard-Components/OTPay/OTPay";
import PaymentCard from "../Dashboard-Components/PaymentCard/PaymentCard";
import PaymentPlan from "../Dashboard-Components/PaymentPlan/PaymentPlan";
//import PaymentSlider from '../Dashboard-Components/PaymentSlider/PaymentSlider'
import PlanCard from "../Dashboard-Components/PlanCard/PlanCard";
import ScheduleActivity from "../Dashboard-Components/ScheduleActivity/ScheduleActivity";
import Sidebar from "../Dashboard-Components/Sidebar/Sidebar";
import Topbar from "../Dashboard-Components/Topbar/Topbar";
const Payment = () => {
  return (
    <div className="dashboard">
      <Topbar />

      <div className="dash-container grid">
        <Sidebar />

        <div className="payment-main-dash grid">
          <div className="payment-top grid">
            <div className="left-cont grid">
              <div className="dash-header flex">
                <p className="dash-title">Payment</p>
              </div>
              <PaymentCard />
            </div>

            <div className="right-cont grid">
              <div className="dash-header flex">
                <p className="dash-title">Payment Plan</p>
              </div>
              <PaymentPlan />
            </div>
          </div>

          <div className="payment-center grid">
            <div className="dash-header flex">
              <p className="dash-title">Payment</p>
            </div>
          </div>

          <div className="payment-end grid">
            <div className="left-cont grid end-cont">
              <div className="right-cont">
                <div className="dash-header flex">
                  <p className="dash-title">Payment Activity</p>
                </div>
                <ScheduleActivity />
              </div>
              <div className="right-cont">
                <div className="dash-header flex">
                  <p className="dash-title">Payment Stats</p>
                </div>
                <PlanCard />
              </div>
            </div>

            <div className="right-cont grid">
              <div className="dash-header flex">
                <p className="dash-subtitle">One-Time Payment</p>
              </div>
              <OTPay />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
