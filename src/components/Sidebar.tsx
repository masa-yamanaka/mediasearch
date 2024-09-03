// src/components/Sidebar.tsx
import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText, Collapse } from "@mui/material";
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
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={handleSettingsClick}>
          <ListItemText primary="Settings" />
          {openSettings ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSettings} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              component={Link}
              to="/settings/email"
              sx={{ pl: 4 }}
            >
              <ListItemText primary="Email Settings" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/settings/account"
              sx={{ pl: 4 }}
            >
              <ListItemText primary="Account Settings" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button component={Link} to="/programs">
          <ListItemText primary="Programs" />
        </ListItem>
        <ListItem button component={Link} to="/reports">
          <ListItemText primary="Report List" />
        </ListItem>
        <ListItem button component={Link} to="/music">
          <ListItemText primary="Music" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
