import React from "react";
import { createContext, useState } from "react";

export const CreateContext = createContext();

export const EmailContext = ({ children }) => {
  const [authEmail, setEmail] = useState("");

  return (
    <CreateContext.Provider value={{ data: "Data", authEmail, setEmail }}>
      {children}
    </CreateContext.Provider>
  );
};
