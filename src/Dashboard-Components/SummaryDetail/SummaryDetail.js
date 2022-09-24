import React from "react";
import { useUserContext } from "../../App";
import "./SummaryDetail.css";

const SummaryDetail = () => {
  const { application, product } = useUserContext();

  return (
    <div className="summary-details">
      <div className="summary-card grid">
        <h3>{product?.name || ""}</h3>

        <div className="summary-detail grid">
          <div className="summary-detail-left">
            <h4>{application?.product?.capacity || ""}</h4>
            <div className="detail-key flex">
              <span style={{ background: "grey" }}></span>{" "}
              <p>{application?.product?.color || ""}</p>
            </div>
          </div>

          <div className="summary-detail-center">
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
        </div>
      </div>
    </div>
  );
};

export default SummaryDetail;
