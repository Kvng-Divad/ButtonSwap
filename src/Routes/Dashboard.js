import React from "react";
import PaymentCard from "../Dashboard-Components/PaymentCard/PaymentCard";
import Pending from "../Dashboard-Components/Pending/Pending";
import Sidebar from "../Dashboard-Components/Sidebar/Sidebar";
import Topbar from "../Dashboard-Components/Topbar/Topbar";
import { Link } from "react-router-dom";
import Recent from "../Dashboard-Components/Recent/Recent";
import SummaryDetail from "../Dashboard-Components/SummaryDetail/SummaryDetail";
import ScheduleCard from "../Dashboard-Components/ScheduleCard/ScheduleCard";
import PlanCardAlt from "../Dashboard-Components/PlanCardAlt/PlanCardAlt";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Topbar />

      <div className="dash-container grid">
        <Sidebar />

        <div className="main-dash grid">
          <div className="dash-left grid">
            <div className="dash-top grid">
              <div className="dash-header flex">
                <p className="dash-title">Overview</p>
              </div>
              <PaymentCard />
            </div>

            <div className="dash-center grid">
              <div className="dash-header flex">
                <p className="dash-title">Pending Actions</p>
                <Link
                  style={{ opacity: 0.4 }}
                  aria-disabled
                  to=""
                  className="dash-nav"
                >
                  see all
                </Link>
              </div>
              <Pending />
            </div>

            <div className="dash-end grid">
              <div className="dash-header flex">
                <p className="dash-title">Recent Actions</p>
                <Link style={{ opacity: 0.4 }} to="" className="dash-nav">
                  see all
                </Link>
              </div>
              <Recent />
            </div>
          </div>

          <div className="dash-right grid">
            <div className="dash-top grid right-cont">
              <div className="dash-header flex">
                <p className="dash-title">Order Summary</p>
                <Link to="/applications" className="dash-nav">
                  view
                </Link>
              </div>

              <SummaryDetail />
            </div>

            <div className="dash-center grid right-cont">
              <div className="dash-header flex">
                <p className="dash-title">Payment Schedule</p>
              </div>
              <ScheduleCard />
            </div>

            <div className="dash-top grid right-cont">
              <div className="dash-header flex">
                <p className="dash-title">Payment Plan</p>
              </div>
              <PlanCardAlt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
