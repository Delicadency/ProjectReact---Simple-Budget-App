import { createContext } from "react";

const IncomeContext = createContext();

export const IncomeProvider = ({ children }) => {
  const type = "income";
  return (
    <IncomeContext.Provider value={type}>{children}</IncomeContext.Provider>
  );
};
export default IncomeContext;