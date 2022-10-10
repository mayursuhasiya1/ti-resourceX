import { useLocation, Navigate, Outlet } from "react-router-dom";

import useAuth from "../hooks/useAuth";

import React from "react";

const RequireAuth = (allowedRoles) => {
  const { auth } = useAuth();

  const location = useLocation();

  const email = auth.email;
  // console.log(email);

  return (
    // checking roles and
    email ? (
      <Outlet />
    ) : email ? (
      <Navigate to="/unauthorized" state={{ from: location }} replace />
    ) : (
      <Navigate to="/login" state={{ from: location }} replace />
    )
  );
};

export default RequireAuth;
