import React, { createContext, useContext, useState } from "react";

type ContextValues = {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

type ContextProviderType = {
  children: React.ReactNode;
};

const InitialValue = {
  openSidebar: false,
  setOpenSidebar: () => {},
};

export const dashContext = createContext<ContextValues>(InitialValue);

export const ContextProvider = ({ children }: ContextProviderType) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <dashContext.Provider value={{ openSidebar, setOpenSidebar }}>
      {children}
    </dashContext.Provider>
  );
};

export const useDashContext = () => useContext(dashContext);
