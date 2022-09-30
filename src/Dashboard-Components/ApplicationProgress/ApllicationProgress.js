import React from "react";

const ApplicationProgress = ({ title }) => {
  return (
    <div className="applicationprogress">
      <div className="application-details">
        <div className="dash-header flex">
          <p className="dash-title">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationProgress;
