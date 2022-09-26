<<<<<<< HEAD
import React from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../App";
import { conveneNumber } from "../../utils";
import "./DeviceDetails.css";

const DeviceDetails = ({ title }) => {
  const { application, product } = useUserContext();

  const Data = [
    {
      header: "MODEL",
      info: product?.name,
    },
    {
      header: "CAPACITY",
      info: application?.product?.capacity,
    },
    {
      header: "COLOR",
      info: application?.product?.color,
    },
    {
      header: "PREFERRED CONDITION",
      info: application?.product?.condition,
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

        <div className="info-details grid">
          <h4>PAYMENT PLAN</h4>
          <div className="info-plan flex">
            <p>{application?.meta?.plan}</p>
            <NavLink aria-disabled to="" className="info-link">
              Change
            </NavLink>
            <div />
          </div>

          <div className="info-details grid">
            <h4>PAYMENT TERMS</h4>
            <div className="info-plan flex">
              <p>{`${application?.meta?.terms?.tenure} ${application?.meta?.terms?.type}`}</p>
              <NavLink aria-disabled disabled to="" className="info-link">
                Change
              </NavLink>
              <div />
            </div>

            <div className="info-details grid">
              <h4>TOTAL PAYMENT</h4>
              <p>{conveneNumber(application?.payment?.total / 100)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceDetails;
=======
import React from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../App";
import { conveneNumber } from "../../utils";
import "./DeviceDetails.css";

const DeviceDetails = ({ title }) => {
  const { application, product } = useUserContext();

  const Data = [
    {
      header: "MODEL",
      info: product?.name,
    },
    {
      header: "CAPACITY",
      info: application?.product?.capacity,
    },
    {
      header: "COLOR",
      info: application?.product?.color,
    },
    {
      header: "PREFERRED CONDITION",
      info: application?.product?.condition,
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

        <div className="info-details grid">
          <h4>PAYMENT PLAN</h4>
          <div className="info-plan flex">
            <p>{application?.meta?.plan}</p>
            <NavLink aria-disabled to="" className="info-link">
              Change
            </NavLink>
            <div />
          </div>

          <div className="info-details grid">
            <h4>PAYMENT TERMS</h4>
            <div className="info-plan flex">
              <p>{`${application?.meta?.terms?.tenure} ${application?.meta?.terms?.type}`}</p>
              <NavLink aria-disabled disabled to="" className="info-link">
                Change
              </NavLink>
              <div />
            </div>

            <div className="info-details grid">
              <h4>TOTAL PAYMENT</h4>
              <p>{conveneNumber(application?.payment?.total / 100)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceDetails;
>>>>>>> d67a1c2f3415f50311b16434b41f1d8f69528f23
