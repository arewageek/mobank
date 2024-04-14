"use client";
import { useContext } from "react";

const userContext = useContext(null);

export const UserContext = ({ children }) => {
  return <UserContext.provider>{children}</UserContext.provider>;
};
