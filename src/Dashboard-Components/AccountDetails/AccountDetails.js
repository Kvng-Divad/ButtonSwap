import React from "react";
import { useUserContext } from "../../App";

const AccountDetails = ({ title }) => {
  const { user } = useUserContext();

  const Data = [
    {
      header: "Bank",
      info: user?.bank,
    },
    {
      header: "Account number",
      info: user?.account_number,
    },
    {
      header: "Bank Branch",
      info: user?.other?.bank_branch,
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

export default AccountDetails;
