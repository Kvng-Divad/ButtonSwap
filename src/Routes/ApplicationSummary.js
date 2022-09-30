import React from "react";
import Topbar from "../Dashboard-Components/Topbar/Topbar";
import AppSummary from "../Application-Component/ApplicationSummary/AppSummary";

const ApplicationSummary = () => {
  return (
    <div className="dashboard">
      <Topbar />
      <AppSummary />
    </div>
  );
};

export default ApplicationSummary;
