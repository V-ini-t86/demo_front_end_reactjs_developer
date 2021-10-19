import React, { useContext, createContext } from "react";

const StateContext = createContext();

function StateProvider({ children }) {
  let value = {
    name: "",
    email: "",
    password: "",
    day: null,
    month: "",
    year: null,
    bio: "",
    website: "",
  };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
}

export default StateProvider;
export const useStateValue = () => useContext(StateContext);
