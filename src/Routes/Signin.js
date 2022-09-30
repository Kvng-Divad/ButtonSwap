import React from "react";
import Topbar from "../Dashboard-Components/Topbar/Topbar";
import SignIn from "../Application-Component/Auth/SignIn";

const Signin = () => {
  return (
    <div className="dashboard">
      <Topbar />
      <SignIn />
    </div>
  );
};

export default Signin;
