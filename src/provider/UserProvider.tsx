import React, { useState } from "react";
import UserContext from "../context/UserContext";
import { UserContextState } from "../types/types";

const UserProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [userType, setUserType] =
    useState<UserContextState["userType"]>("individual"); // Initial state

  const handleUserTypeChange = (newType: UserContextState["userType"]) => {
    setUserType(newType);
  };

  const contextValue: UserContextState = {
    userType,
    setUserType: handleUserTypeChange,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
