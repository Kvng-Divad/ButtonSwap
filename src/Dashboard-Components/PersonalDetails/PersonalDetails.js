<<<<<<< HEAD
import React from "react";
import { useUserContext } from "../../App";
import "./PersonalDetails.css";

const PersonalDetails = ({ title }) => {
  const { user } = useUserContext();

  const Data = [
    {
      header: "Full Name",
      info: user?.full_name,
    },
    {
      header: "Work email",
      info: user?.work_email,
    },
    {
      header: "Phone number",
      info: user?.phone_number,
    },
    {
      header: "Delivery address",
      info: user?.delivery_address,
    },
  ];

  return (
    <div className="application-details grid">
      <div className="dash-header flex">
        <p className="dash-title">{title}</p>
      </div>

      <div className="details-container grid">
        {Data.map((item, index) => {
          return (
            <div key={index} className="info-details grid">
              <h4>{item.header}</h4>
              <p>{item.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalDetails;
=======
import React from "react";
import { useUserContext } from "../../App";
import "./PersonalDetails.css";

const PersonalDetails = ({ title }) => {
  const { user } = useUserContext();

  const Data = [
    {
      header: "Full Name",
      info: user?.full_name,
    },
    {
      header: "Work email",
      info: user?.work_email,
    },
    {
      header: "Phone number",
      info: user?.phone_number,
    },
    {
      header: "Delivery address",
      info: user?.delivery_address,
    },
  ];

  return (
    <div className="application-details grid">
      <div className="dash-header flex">
        <p className="dash-title">{title}</p>
      </div>

      <div className="details-container grid">
        {Data.map((item, index) => {
          return (
            <div key={index} className="info-details grid">
              <h4>{item.header}</h4>
              <p>{item.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalDetails;
>>>>>>> d67a1c2f3415f50311b16434b41f1d8f69528f23
