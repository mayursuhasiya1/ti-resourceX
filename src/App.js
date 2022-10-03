// import  from './landingPage'
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Register from "./components/Register";
import Unauthorized from "./components/Unauthorized";
import RequireAuth from "./components/RequireAuth";
import Admin from "./components/Admin";
import Developer from "./components/Developer";
import Layout from "./components/Layout";

// from other team members
import LandingPage from "./components/LandingPage";

import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Organization from "./components/Organization";
import LeaveManagement from "./components/LeaveManagement";
import ProjectManagement from "./components/ProjectManagement";
import LearningDevelopment from "./components/LearningDevelopment";

const ROLES = {
  Admin: 1,
  Employee: 2,
  Developer: 3,
};

function App() {
  // roleId : 1 => admin
  // roleId : 2 => Employee
  // roleId : 3 => Developer

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="admin" element={<Admin />} />
          {/* other pages */}
          <Route path="/orgchart" element={<Organization />} />
          <Route path="/leavemanagement" element={<LeaveManagement />} />
          <Route path="/projectmanagement" element={<ProjectManagement />} />
          <Route
            path="/learningdevelopment"
            element={<LearningDevelopment />}
          />
        </Route>

        {/* <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>      
          <Route path="/" element={<Home />} />
          <Route path="admin" element={<Admin />} />
        </Route>


        <Route element={<RequireAuth allowedRoles={[ROLES.Developer]} />}>
          <Route path="/" element={<Home />} />
          <Route path="developer" element={<Developer />} />
        </Route> */}

        {/* catch all */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
