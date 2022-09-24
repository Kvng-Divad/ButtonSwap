import React from "react";
import "./Recent.css";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const Recent = () => {
  const Data = [
    {
      actions: "Payment plan agreement",
      type: "Proposal",
      date: "18th October, 2022",
      status: "Incomplete",
    },
    {
      actions: "Payment plan agreement",
      type: "Proposal",
      date: "18th October, 2022",
      status: "Incomplete",
    },
    {
      actions: "Payment plan agreement",
      type: "Proposal",
      date: "18th October, 2022",
      status: "Incomplete",
    },
    {
      actions: "Payment plan agreement",
      type: "Proposal",
      date: "18th October, 2022",
      status: "Incomplete",
    },
    {
      actions: "Payment plan agreement",
      type: "Proposal",
      date: "18th October, 2022",
      status: "Incomplete",
    },
  ];
  return (
    <div className="recent">
      <TableContainer className="table-container">
        <Table variant="unstyled" size="sm">
          <Thead>
            <Tr>
              <Th className="table-head">Actions</Th>
              <Th className="table-head">Type</Th>
              <Th className="table-head">Due date</Th>
              <Th className="table-head">Status</Th>
            </Tr>
          </Thead>

          <Tbody>
            {Data.map((item, index) => {
              return (
                <Tr key={index}>
                  <Td className="table-row">{item.actions}</Td>
                  <Td className="table-row">{item.type}</Td>
                  <Td className="table-row">{item.date}</Td>
                  <Td className="table-row">{item.status}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Recent;
