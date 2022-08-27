import React, { createContext, useState } from "react";

export const Cateogry = createContext();

export const Context = ({ children }) => {
  const [type, setType] = useState("all");
  return (
    <Cateogry.Provider value={{ type, setType }}>{children}</Cateogry.Provider>
  );
};

export default Context;
