import React, { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
} from "react-pro-sidebar";
import {Box,IconButton,Typography,useTheme,} from "@mui/material";
import { tokens } from "../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined"; 
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";

// Dashboard
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

// Invoices
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

// Inbox
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

// Financials
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

// Gallery
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";

// Feedback
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";

import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();

  const menuItems = [
    { title: "Dashboard", icon: <DashboardOutlinedIcon />, path: "/" },
    { title: "Bookings", icon: <AssignmentOutlinedIcon />, path: "/team" },
    { title: "Invoices", icon: <ReceiptLongOutlinedIcon />, path: "/contacts" },
    { title: "Inbox", icon: < MailOutlineOutlinedIcon />, path: "/invoices" },
    { title: "Calender", icon: <CalendarTodayOutlinedIcon />, path: "/calender" },
    { title: "Events", icon: <EventOutlinedIcon />, path: "/event" },
    { title: "Financials", icon: <AccountBalanceWalletOutlinedIcon />, path: "/faq" },
    { title: "Gallery", icon: <PhotoLibraryOutlinedIcon />, path: "/gallery" },
    { title: "Feedback", icon: <FeedbackOutlinedIcon/>, path: "/pie" },
  ];

  return (
        <Box
  sx={{
    height: "100vh", // يمنع أي محتويات خارج الشاشة
    width: "250px", // تحديد العرض
    position: "fixed",
    zIndex: 100, 
    overflow: "auto", // يسمح بالتمرير إذا كان المحتوى كبيرًا
    background: colors.primary[400],
        "& .ps-sidebar-container": {
          background: `${colors.primary[400]} !important`,
          borderRadius: "25px",
          overflow: "hidden", // حتى لا يظهر أي جزء زائد
          margin: "10px",
          padding: "15px",
          height: "100vh",
          color: `${colors.grey[100]}`,
        },
        "& .ps-menu-button:hover": {
          color: "#F36BF9",
        },
        "& .ps-menuitem-root.ps-active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar breakPoint="md" backgroundColor="#1f2a40" >
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => collapseSidebar()}
            style={{ marginBottom: 20 }}
          >
            {!collapsed && (
              <Typography variant="h4" color="#fff">
                MENU
              </Typography>
            )}
          </MenuItem>

          {menuItems.map((item) => (
            <MenuItem
              key={item.title}
              icon={item.icon}
              active={selected === item.title}
              onClick={() => {
                setSelected(item.title);
                navigate(item.path);
              }}
            >
              {item.title}
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;