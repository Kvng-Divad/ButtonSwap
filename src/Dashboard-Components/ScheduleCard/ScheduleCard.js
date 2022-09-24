import "./ScheduleCard.css";
import React from "react";
import { useUserContext } from "../../App";
import { conveneNumber } from "../../utils";

const ScheduleCard = () => {
  const { application } = useUserContext();
  const down = Math.round(application?.payment?.down);
  const dividend = Math.round(application?.payment?.dividend);
  const Data = [...Array(application?.meta?.terms?.tenure).keys()];

  return (
    <div className="ScheduleCard">
      <div className="order-details">
        <h4>TOTAL</h4>
        <p>Down Payment: {conveneNumber(down)}</p>
        {Data.map(number => {
          const cardinal = Number(String(number + 1).slice(-1));
          return (
            <p key={number} style={{ margin: "5px 0" }}>{`${number + 1}${
              cardinal === 1
                ? "st"
                : cardinal === 2
                ? "nd"
                : cardinal === 3
                ? "rd"
                : "th"
            } payment: ${conveneNumber(dividend)}`}</p>
          );
        })}
      </div>
    </div>
  );
};

export default ScheduleCard;
