import React, { createContext, useState } from "react";

export const Cateogry = createContext();

export const Context = ({ children }) => {
  const [type, setType] = useState("all");
  const [open, setOpen] = useState(false);
  return (
    <Cateogry.Provider value={{ type, setType, open, setOpen }}>
      {children}
    </Cateogry.Provider>
  );
};

export default Context;
