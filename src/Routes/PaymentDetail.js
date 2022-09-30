import React from "react";
import Topbar from "../Dashboard-Components/Topbar/Topbar";
import PaymentDetails from "../Application-Component/PaymentDetail/PaymentDetails";

const PaymentDetail = () => {
  return (
    <div className="dashboard">
      <Topbar />
      <PaymentDetails />
    </div>
  );
};

export default PaymentDetail;
