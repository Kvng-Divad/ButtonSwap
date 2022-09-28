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

  const makeStyle=(status)=>{
    if(status === "Complete"){
        return{
            background:"rgb(145 254 157 / 47%)",
            color: "green",
            padding:'.25rem',
            borderRadius:'.25rem',
        }
    }
    if(status === "Pending"){
        return{
            background:"rgb(245 145 157 / 47%)",
            color: "red",
            padding:'.25rem',
            borderRadius:'.25rem',
        }
    }
    if(status === "Ongoing"){
      return{
          background:"rgba(94, 94, 94, 0.67)",
          color: "yellow",
          padding:'.25rem',
          borderRadius:'.25rem',
      }
  }
    else{
        return{
            background:"rgb(15 17 256 / 47%)",
            color: "white",
            padding:'.25rem',
            borderRadius:'.25rem',
        }
    }
}
  const Data = [
    {
      actions: "Payment plan agreement",
      type: "Proposal",
      date: "18th October, 2022",
      status: "Complete",
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
      status: "Ongoing",
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
      status: "Pending",
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
                  <Td className="table-row">
                    <span className='status' style={makeStyle(item.status)}>{item.status}</span>
                  </Td>
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
