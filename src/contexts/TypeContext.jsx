import { createContext } from "react";

const TypeContext = createContext();

export const TypeProvider = ({ children, type }) => {
  return (
    <TypeContext.Provider value={type}>{children}</TypeContext.Provider>
  );
};
export default TypeContext;