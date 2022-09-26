import React from "react";
import "./PlanCard.css";
import { CircularProgress } from "@chakra-ui/react";
import { useUserContext } from "../../App";

const PlanCard = () => {
  const { application } = useUserContext();
  const otherColors = [
    "#FAE9AE",
    "#FDC088",
    "#FFE3CA",
    "#FAE9AE",
    "#FDC088",
    "#FFE3CA",
  ];
  const Data = [
    {
      plan: "Down payment",
      color: "#E3000F",
    },
    ...[...Array(application?.meta?.terms?.tenure).keys()]?.map(number => {
      const cardinal = Number(String(number + 1).slice(-1));

      return {
        plan: `${number + 1}${
          cardinal === 1
            ? "st"
            : cardinal === 2
            ? "nd"
            : cardinal === 3
            ? "rd"
            : "th"
        } payment`,
        color: otherColors[number],
      };
    }),
  ];

  const percentage = application
    ? Math.round(
        (Number(application?.payment?.paid) /
          Number(application?.payment?.total)) *
          100
      )
    : 0;
  return (
    <div className="planCard">
      <div className="plan-conainer grid">
        <div className="planCard-left grid">
          <CircularProgress
            value={percentage}
            size="150px"
            color="#E3000F"
            thickness="16px"
            className="plan-progress"
          />
        </div>

        <div className="planCard-right grid">
          <div className="plan-value grid">
            <h3>{percentage}%</h3>
            <p>Complete</p>
          </div>

          <div className="plan-keys grid">
            {Data.map((item, index) => {
              return (
                <div key={index} className="plan-key flex">
                  <span style={{ background: item.color }}></span>{" "}
                  <p>{item.plan}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
