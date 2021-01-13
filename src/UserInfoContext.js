import React from "react";
import useStickyState from "./useLocalStorageHook";

export const UserInfoContext = React.createContext(null);

export const UserInfoContextProvider = ({ children }) => {
  const [categoryName, setCategoryName] = useStickyState("", "category");
  const [monthlyAmount, setMonthlyAmount] = useStickyState("", "monthlyAmount");
  const [yearlyAmount, setYearlyAmount] = useStickyState("", "yearlyAmount");
  const [categoryArray, setCategoryArray] = useStickyState([], "categoryArray");

  return (
    <UserInfoContext.Provider
      value={{
        categoryName,
        setCategoryName,
        monthlyAmount,
        setMonthlyAmount,
        yearlyAmount,
        setYearlyAmount,
        categoryArray,
        setCategoryArray,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};
