// src/components/Sidebar.tsx
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemText,
  Collapse,
  ListItemButton,
  Box,
  ListItemIcon,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import TvIcon from "@mui/icons-material/Tv";
import SettingsIcon from "@mui/icons-material/Settings";
import ListIcon from "@mui/icons-material/List";
import FeedIcon from "@mui/icons-material/Feed";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import Divider from "@mui/material/Divider";

const drawerWidth = 240;

const Sidebar: React.FC = () => {
  const [openSettings, setOpenSettings] = useState(false);
  const [openPrograms, setOpenPrograms] = useState(false);

  const handleSettingsClick = () => {
    setOpenSettings(!openSettings);
  };

  const handleProgramsClick = () => {
    setOpenPrograms(!openPrograms);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ flexGrow: 1 }}>
        <List>
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="ホーム" />
          </ListItemButton>
          <Divider />

          {/* Settings Section */}
          <ListItemButton onClick={handleSettingsClick}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="各種設定" />
            {openSettings ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openSettings} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                component={Link}
                to="/settings/email"
                sx={{ pl: 4 }}
              >
                <ListItemText primary="メールアドレス設定" />
              </ListItemButton>
              <ListItemButton
                component={Link}
                to="/settings/account"
                sx={{ pl: 4 }}
              >
                <ListItemText primary="アカウント管理" />
              </ListItemButton>
            </List>
          </Collapse>

          {/* Programs Section */}
          <ListItemButton onClick={handleProgramsClick}>
            <ListItemIcon>
              <TvIcon />
            </ListItemIcon>
            <ListItemText primary="番組連携" />
            {openPrograms ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openPrograms} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                component={Link}
                to="/programs/information"
                sx={{ pl: 4 }}
              >
                <ListItemIcon>
                  <FeedIcon />
                </ListItemIcon>
                <ListItemText primary="番組情報連携" />
              </ListItemButton>
              <ListItemButton
                component={Link}
                to="/programs/list"
                sx={{ pl: 4 }}
              >
                <ListItemIcon>
                  <ListIcon />
                </ListItemIcon>
                <ListItemText primary="番組確認一覧連携" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton component={Link} to="/reports">
            <ListItemIcon>
              <AssignmentTurnedInIcon />
            </ListItemIcon>
            <ListItemText primary="報告管理リスト" />
          </ListItemButton>
          <ListItemButton component={Link} to="/music">
            <ListItemIcon>
              <LibraryMusicIcon />
            </ListItemIcon>
            <ListItemText primary="楽曲連携" />
          </ListItemButton>
        </List>
      </Box>

      <Box sx={{ p: 2 }}>
        <List>
          <ListItemButton component={Link} to="/login">
            <ListItemText primary="Login" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
