import React, { useEffect, useState, useContext } from "react";
import {
  Typography,
  Box,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import { ColorModeContext, tokens } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchBar from "./SearchBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = ({ title, subtitle, isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([]);
  const [hiddenNotificationsIds, setHiddenNotificationsIds] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const res = await axios.get("http://localhost:8081/api/notifications");
      setNotifications(res.data);
    } catch (error) {
      console.error("Error fetching notifications", error);
    }
  };

  const unreadCount = notifications.filter(
    (notif) => !notif.read && !hiddenNotificationsIds.includes(notif.id)
  ).length;

  const handleMarkAsReadAndHide = async (id) => {
    try {
      // حدث حالة القراءة في الـ backend
      await axios.put(`http://localhost:8081/api/notifications/${id}/read`);
      // أخفي الرسالة من قائمة الإشعارات محلياً
      setHiddenNotificationsIds((prev) => [...prev, id]);
    } catch (error) {
      console.error("Error marking notification as read", error);
    }
  };

  const handleNotificationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
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
        padding: "15px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
      }}
    >
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

      <SearchBar />

      <Box display="flex" gap={2}>
        <IconButton
          onClick={colorMode.toggleColorMode}
          sx={{
            backgroundColor: colors.grey[100],
            borderRadius: "50%",
            padding: "8px",
            "&:hover": { backgroundColor: colors.primary[600] },
          }}
        >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        <IconButton
          onClick={handleNotificationClick}
          sx={{
            backgroundColor: colors.grey[100],
            borderRadius: "50%",
            padding: "8px",
          }}
        >
          <Badge badgeContent={unreadCount} color="error">
            <NotificationsOutlinedIcon />
          </Badge>
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            style: { maxHeight: 300, width: "300px" },
          }}
        >
          {notifications.filter(notif => !hiddenNotificationsIds.includes(notif.id)).length === 0 && (
            <MenuItem disabled>لا توجد إشعارات</MenuItem>
          )}
          {notifications
            .filter((notif) => !hiddenNotificationsIds.includes(notif.id))
            .map((notif) => (
              <MenuItem
                key={notif.id}
                onClick={() => {
                  handleMarkAsReadAndHide(notif.id);
                  handleClose();
                  navigate("/inbox");
                }}
                sx={{
                  fontWeight: notif.read ? "normal" : "bold",
                  whiteSpace: "normal",
                }}
              >
                {notif.message}
              </MenuItem>
            ))}
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
