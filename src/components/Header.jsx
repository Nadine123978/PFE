import { Typography, Box, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { Badge, Menu, MenuItem } from "@mui/material";


const Header = ({ title, subtitle, isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);


  const [anchorEl, setAnchorEl] = useState(null);
const [notifications, setNotifications] = useState([
  "Event created successfully",
  "New user registered",
  "Backup completed"
]);

const handleBellClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleCloseMenu = () => {
  setAnchorEl(null);
};

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb="30px"
      width="100%"
      sx={{
        backgroundColor: colors.primary[300],
        borderRadius: "25px",
        padding: "15px", // تعديل المسافات لتكون متناسقة
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)", // لإضافة تأثير الظل
      }}
    >
      {/* Title & Subtitle */}
      <Box>
        <Typography
          variant="h3"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ marginBottom: "5px" }}
        >
          {title}
        </Typography>
        <Typography color={colors.greenAccent[400]}>{subtitle}</Typography>
      </Box>

      {/* Search Bar */}
      <SearchBar />

      {/* Icons */}
      <Box display="flex" gap={2}>
        <IconButton
          onClick={colorMode.toggleColorMode}
          sx={{
            backgroundColor: colors.grey[100],
            borderRadius: "50%",
            padding: "8px",
            "&:hover": {
              backgroundColor: colors.primary[600],
            },
          }}
        >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton
  onClick={handleBellClick}
  sx={{
    backgroundColor: colors.grey[100],
    borderRadius: "50%",
    padding: "8px",
  }}
>
  <Badge badgeContent={notifications.length} color="error">
    <NotificationsOutlinedIcon />
  </Badge>
</IconButton>

<Menu
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}
  onClose={handleCloseMenu}
  PaperProps={{
    style: {
      backgroundColor: colors.primary[400],
      color: "#fff", 
      width: 300,
    },
  }}
>
  {notifications.length === 0 ? (
    <MenuItem disabled>No new notifications</MenuItem>
  ) : (
    notifications.map((notif, index) => (
      <MenuItem key={index} onClick={handleCloseMenu}  sx={{ color: "#fff" }}>
        {notif}
      </MenuItem>
    ))
  )}
</Menu>

        <IconButton
          sx={{
            backgroundColor: colors.grey[100],
            borderRadius: "50%",
            padding: "8px",
          }}
        >
          <SettingsOutlinedIcon />
        </IconButton>
      </Box>

      {/* Profile Section */}
      {!isCollapsed && (
        <Box display="flex" alignItems="center" gap={2}>
          <img
            alt="profile-user"
            width="50px"
            height="50px"
            src="../../assets/user.png"
            style={{ cursor: "pointer", borderRadius: "50%" }}
          />
          <Box>
            <Typography variant="h6" color={colors.grey[100]} fontWeight="bold">
              Oriando Laurientus
            </Typography>
            <Typography color={colors.greenAccent[400]}>Admin</Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Header;
