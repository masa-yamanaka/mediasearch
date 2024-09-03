import React from "react";
import { Box, Typography } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const MainPage: React.FC = () => {
  const location = useLocation();

  // Determine if the current route is the home page
  const isHomePage = location.pathname === "/";

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ p: 3 }}>
        {isHomePage && (
          <Typography variant="h1">This is the home page</Typography>
        )}
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainPage;
