import React from "react";

import "./Pending.css";
import {
  Table,
  Thead,
  Tbody,
  // Tfoot,
  Tr,
  Th,
  Td,
  //TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { useUserContext } from "../../App";

const makeStyle = status => {
  if (status === "complete") {
    return {
      background: "rgb(145 254 157 / 47%)",
      color: "green",
      padding: ".25rem",
      borderRadius: ".25rem",
    };
  }
  if (status === "pending") {
    return {
      background: "rgb(245 145 157 / 47%)",
      color: "red",
      padding: ".25rem",
      borderRadius: ".25rem",
    };
  }
  if (status === "ongoing") {
    return {
      background: "rgba(94, 94, 94, 0.67)",
      color: "yellow",
      padding: ".25rem",
      borderRadius: ".25rem",
    };
  } else {
    return {
      background: "rgb(15 17 256 / 47%)",
      color: "white",
      padding: ".25rem",
      borderRadius: ".25rem",
    };
  }
};

const Pending = () => {
  const { actions } = useUserContext();

  const Data = actions
    ? actions?.map(action =>
        action?.status === "pending"
          ? {
              ...action,
              actions: action.name,
              date: new Date(action.due_date).toDateString(),
            }
          : undefined
      )
    : [];
  return (
    <div className="pending">
      <TableContainer className="table-container">
        <Table variant="unstyled" size="sm">
          <Thead>
            <Tr>
              <Th className="table-head">Actions</Th>
              <Th className="table-head">Type</Th>
              <Th className="table-head">Due date</Th>
              <Th className="table-head">Status</Th>
              <Th className="table-head">Action</Th>
            </Tr>
          </Thead>

          <Tbody>
            {Data.map((item, index) => {
              return (
                item && (
                  <Tr key={index}>
                    <Td
                      cursor="pointer"
                      onClick={() => window.location.replace(item?.link)}
                      className="table-row"
                    >
                      {item.actions}
                    </Td>
                    <Td textTransform={"capitalize"} className="table-row">
                      {item.type}
                    </Td>
                    <Td className="table-row">{item.date}</Td>
                    <Td className="table-row">
                      <span className="status" style={makeStyle(item.status)}>
                        {item.status}
                      </span>
                    </Td>
                    <Td>
                      <Button
                        size={"sm"}
                        cursor="pointer"
                        onClick={() => window.location.replace(item?.link)}
                      >
                        Take Action
                      </Button>
                    </Td>
                  </Tr>
                )
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Pending;
