import React from "react";
import AccountDetails from "../Dashboard-Components/AccountDetails/AccountDetails";
import DeviceDetails from "../Dashboard-Components/DeviceDetails/DeviceDetails";
import ApplicationDetails from "../Dashboard-Components/ApplicationDetails/ApplicationDetails";
import PersonalDetails from "../Dashboard-Components/PersonalDetails/PersonalDetails";
import Sidebar from "../Dashboard-Components/Sidebar/Sidebar";
import Topbar from "../Dashboard-Components/Topbar/Topbar";
import ApplicationProgress from "../Dashboard-Components/ApplicationProgress/ApllicationProgress";

const MyApplications = () => {
  return (
    <div className="dashboard">
      <Topbar />

      <div className="dash-container grid">
        <Sidebar />

        <div className="application-main-dash grid">
          <div className="dash-header flex">
            <p className="dash-title">My Application</p>
          </div>

          <div className="application-dash grid">
            <div className="application-grid grid-box grid">
              <ApplicationDetails title="Pending Actions" />

              <ApplicationProgress title="Application Progress" />
            </div>

            <div className="application-grid grid">
              <DeviceDetails title="Device details" />
            </div>

            <div className="application-grid grid-box grid">
              <>
                <PersonalDetails title="Personal details" />
              </>

              <>
                <AccountDetails title="Account Information" />
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyApplications;
