// src/components/Sidebar.tsx
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemText,
  Collapse,
  ListItemButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const drawerWidth = 240;

const Sidebar: React.FC = () => {
  const [openSettings, setOpenSettings] = useState(false);

  const handleSettingsClick = () => {
    setOpenSettings(!openSettings);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItemButton component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton onClick={handleSettingsClick}>
          <ListItemText primary="Settings" />
          {openSettings ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openSettings} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              component={Link}
              to="/settings/email"
              sx={{ pl: 4 }}
            >
              <ListItemText primary="Email Settings" />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to="/settings/account"
              sx={{ pl: 4 }}
            >
              <ListItemText primary="Account Settings" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton component={Link} to="/programs">
          <ListItemText primary="Programs" />
        </ListItemButton>
        <ListItemButton component={Link} to="/reports">
          <ListItemText primary="Report List" />
        </ListItemButton>
        <ListItemButton component={Link} to="/music">
          <ListItemText primary="Music" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
