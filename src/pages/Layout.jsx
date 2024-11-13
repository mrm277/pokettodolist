import React from "react";
import { useLocation } from "react-router-dom";
import BackButton from "../components/BackButton";

function Layout({ children }) {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
    {!isHomePage && <BackButton />}
    {children}
  </div>
  );
}

export default Layout;