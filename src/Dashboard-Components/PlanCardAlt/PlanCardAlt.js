import React from "react";
import "./PlanCardAlt.css";
import { CircularProgress } from "@chakra-ui/react";
import {
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { useUserContext } from "../../App";

const PlanCardAlt = () => {
  const { application } = useUserContext();
  const plans = [
    { name: "Pay Monthly", value: "recurring" },
    { name: "Pay Now", value: "once" },
  ];

  const oneTime = application?.meta?.plan === plans[1].value;
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
      <div className="plan-conainer2 grid">
        <div className="planCardAlt-left grid">
          <CircularProgress
            value={percentage}
            size="120px"
            color="#E3000F"
            thickness="16px"
            className="plan-progress"
          />
        </div>
        <div className="planCardAlt-right grid">
          <div className="plan-input grid">
            <Select
              className="n-input"
              disabled={oneTime}
              value={application?.meta?.terms?.type}
              maxW="120px"
            >
              <option value="weeks">Weekly</option>
              <option value="months">Monthly</option>
            </Select>
            <div>
              <Flex>
                <NumberInput
                  isDisabled={oneTime}
                  size="md"
                  mr=""
                  maxW="60px"
                  max={6}
                  value={application?.meta?.terms?.tenure}
                  min={1}
                >
                  <NumberInputField className="n-input" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>

                <Select
                  className="n-input"
                  placeholder="Select Plan"
                  value={application?.meta?.plan}
                  maxW="120px"
                >
                  <option value="once">One Time</option>
                  <option value="recurring">Recurring</option>
                </Select>
              </Flex>
            </div>
          </div>

          <div className="planAlt-keys grid">
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

export default PlanCardAlt;
