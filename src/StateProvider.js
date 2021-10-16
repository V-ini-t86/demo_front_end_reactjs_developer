import React, { useContext, createContext } from "react";

const Context = createContext();

function StateProvider({ children }) {
  let value = {};
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default StateProvider;
export const useStateValue = () => useContext(StateProvider);
