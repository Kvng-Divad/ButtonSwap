import React from "react";
import "./PaymentPlan.css";
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

const PaymentPlan = () => {
  const { application } = useUserContext();
  return (
    <div className="PaymentPlan">
      <div className="payment-plan grid">
        <div className="payment-plan-top flex">
          <Select
            isDisabled
            className="s-input"
            value={application?.meta?.plan}
            placeholder="Select Plan"
            maxW="110px"
          >
            <option value="once">One Time</option>
            <option value="recurring">Recurring</option>
          </Select>

          <button disabled className="change-btn">
            Change Payment Plan
          </button>
        </div>

        <div className="payment-plan-top flex">
          <Flex>
            <NumberInput
              isDisabled
              value={application?.meta?.terms?.tenure}
              size="md"
              maxW="60px"
              max={6}
              min={1}
            >
              <NumberInputField className="n-input" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>

            <Select
              disabled
              placeholder="Select"
              maxW="90px"
              className="s-input"
              value={application?.meta?.terms?.type}
            >
              <option value="weeks">Weeks</option>
              <option value="months">Months</option>
            </Select>
          </Flex>
          <button disabled className="change-btn">
            Change Payment Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlan;
