<<<<<<< HEAD
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
=======
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
>>>>>>> d67a1c2f3415f50311b16434b41f1d8f69528f23
