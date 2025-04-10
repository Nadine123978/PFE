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
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import GalleryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();

  const menuItems = [
    { title: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
    { title: "Bookings", icon: <BusinessCenterOutlinedIcon />, path: "/team" },
    { title: "Invoices", icon: <ContactsOutlinedIcon />, path: "/contacts" },
    { title: "Inbox", icon: <ReceiptOutlinedIcon />, path: "/invoices" },
    { title: "Calender", icon: <CalendarTodayOutlinedIcon />, path: "/form" },
    { title: "Events", icon: <EventNoteOutlinedIcon />, path: "/calendar" },
    { title: "Financials", icon: <HelpOutlineOutlinedIcon />, path: "/faq" },
    { title: "Gallery", icon: <GalleryOutlinedIcon />, path: "/bar" },
    { title: "Feedback", icon: <PieChartOutlineOutlinedIcon />, path: "/pie" },
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