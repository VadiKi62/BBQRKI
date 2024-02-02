"use client";
import { createContext, useContext, useState } from "react";

const GlobalStateContext = createContext();

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};

export const GlobalStateProvider = ({ children }) => {
  const [rests, setRests] = useState([]);

  const updateRests = (newRests) => {
    setRests(newRests);
  };

  return (
    <GlobalStateContext.Provider value={{ rests, updateRests }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
