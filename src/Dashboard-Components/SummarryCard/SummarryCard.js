import React from "react";
import { useUserContext } from "../../App";
import Dashbtn from "../dash-btn";
import "./SummarryCard.css";

const SummarryCard = ({ title }) => {
  const { application, product } = useUserContext();
  return (
    <div className="summarry-Card">
      <div className="application-details grid">
        <div className="dash-header flex">
          <p className="dash-title">{title}</p>
        </div>
        <div className="summarry-card-container grid">
          <div className="summarry-card grid">
            <h3>{product?.name}</h3>
            <div className="summarry-detail grid">
              <div className="summarry-detail-left grid">
                <h4>{application?.product?.capacity}</h4>
                <div className="detail-key flex">
                  <span style={{ background: "grey" }}></span>{" "}
                  <p>{application?.product?.color}</p>
                </div>
              </div>

              <div className="summarry-detail-center grid">
                <p>
                  {application?.meta?.plan === "once"
                    ? "One Time"
                    : `${
                        application?.meta?.terms?.type === "weeks"
                          ? "Weekly"
                          : "Monthly"
                      } plan`}
                </p>
                <p>{`${application?.meta?.terms?.tenure} ${application?.meta?.terms?.type}`}</p>
              </div>

              <div className="summarry-detail-center grid">
                <p>
                  {application?.product?.condition === "old"
                    ? "Pre Owned"
                    : "Brand new"}
                </p>
              </div>
            </div>
          </div>

          <div className="profile-btn Btns">
            <Dashbtn text="VIEW APPLICATION" type="" link="/applications" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummarryCard;
