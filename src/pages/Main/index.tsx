import React from "react";
import { Box, Typography } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const MainPage: React.FC = () => {
  const location = useLocation();

  // Map paths to titles
  const titles: { [key: string]: string } = {
    "/": "Home Page",
    "/programs": "Programs",
    "/programs/list": "番組確認一覧連携",
    "/settings": "Settings",
    "/settings/email": "Email Settings",
    "/settings/account": "Account Settings",
    "/reports": "Report List",
    "/music": "Music",
    "/login": "Login",
  };

  // Get the current title based on the location path
  // Default to "Page" if not found
  const title = titles[location.pathname] || "Page";

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ p: 3 }}>
        <Typography
          variant="h1"
          sx={{ fontSize: "2rem", fontWeight: "bold", mb: 4 }}
        >
          {title}
        </Typography>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainPage;
