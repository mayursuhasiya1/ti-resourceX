import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import { NavBarData } from "./NavBarData";
import Home from "./Home";
import Organization from "./Organization";
import TimeTracker from "./LeaveManagement";
import { Routes, Route, useLocation } from "react-router-dom";
import ProjectManagement from "./ProjectManagement";
import LearningDevelopment from "./LearningDevelopment";
import { Link } from "react-router-dom";
import SideNavPopup from "./SideNavPopup";
import Divider from "@mui/material/Divider";

// authorisation
// route with authorisation requires this imports
import RequireAuth from "./RequireAuth";
import AuthContext from "../context/AuthProvider";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// authcontext api
import useAuth from "../hooks/useAuth";
import "../App";
import "../App.css";
import "../index.css";
import LeaveManagement from "./LeaveManagement";

const drawerWidth = 260;

function LandingPage() {
  const { pathname } = useLocation();
  const drawer = (
    <div className="nav">
      <Toolbar />
      <List>
        {NavBarData.map((data) => (
          <ListItem key={data.title} disablePadding>
            {data.path === pathname ? (
              <Link to={data.path} style={{ color: "white" }}>
                {data.icon}
                {data.title}
              </Link>
            ) : (
              <Link to={data.path}>
                {data.icon}
                {data.title}
              </Link>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#f98b81",
          flexDirection: "row-reverse",
          display: {
            lg: "none",
            md: "none",
            sm: "none",
          },
        }}
      >
        <Toolbar>
          <SideNavPopup />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Divider />
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background:
                "linear-gradient(-45deg, #f994a9, #f0755d, #da6353, #fef3f2)",
              backgroundSize: "400% 400%",
              animation: "gradient 15s ease infinite;",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/orgchart" element={<Organization />} />
          <Route path="/leavemanagement" element={<TimeTracker />} />
          <Route path="/projectmanagement" element={<ProjectManagement />} />
          <Route
            path="/learningdevelopment"
            element={<LearningDevelopment />}
          />
        </Routes>
      </Box>
    </Box>
  );
}

export default LandingPage;
