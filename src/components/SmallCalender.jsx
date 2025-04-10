// SmallCalendarWithEvents.jsx

import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  useTheme,
  Paper,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  LocalizationProvider,
  StaticDatePicker,
} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CategoryIcon from "@mui/icons-material/Category";

const events = [
  {
    date: "2029-03-03",
    title: "Panel Discussion",
    subtitle: "Tech Beyond 2024",
    category: "Technology",
    time: "10:00 AM - 12:00 PM",
    color: "#E0E7FF",
    icon: <EventIcon fontSize="small" />,
  },
  {
    date: "2029-03-05",
    title: "Live Concert",
    subtitle: "Echo Beats Festival",
    category: "Music",
    time: "6:00 PM - 11:00 PM",
    color: "#F0E4FF",
    icon: <MusicNoteIcon fontSize="small" />,
  },
  {
    date: "2029-03-23",
    title: "Fashion Showcase",
    subtitle: "Spring Trends Runway Show",
    category: "Fashion",
    time: "3:00 PM - 5:00 PM",
    color: "#E3F2FD",
    icon: <CategoryIcon fontSize="small" />,
  },
];

const SmallCalendarWithEvents = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs("2029-03-14"));
  const theme = useTheme();

  return (
    <Box
      sx={{
        borderRadius: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        p: 2,
        width: "100%",
        maxWidth: 320,
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
          views={["day"]}
          sx={{
            "& .MuiPickersDay-root": {
              fontWeight: "bold",
            },
            "& .Mui-selected": {
              backgroundColor: "#f36bf9 !important",
              color: "#fff",
            },
          }}
        />
      </LocalizationProvider>

      <Box mt={2}>
        {events.map((event) => (
          <Paper
            key={event.date}
            elevation={0}
            sx={{
              p: 2,
              mb: 2,
              borderRadius: "16px",
              backgroundColor: event.color,
            }}
          >
            <Typography fontWeight="bold" variant="body2" mb={0.5}>
              {dayjs(event.date).format("D MMMM")} - {event.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {event.subtitle}
            </Typography>
            <Box display="flex" alignItems="center" mt={1} gap={1}>
              {event.icon}
              <Typography variant="caption">{event.category}</Typography>
              <AccessTimeIcon sx={{ fontSize: 16 }} />
              <Typography variant="caption">{event.time}</Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default SmallCalendarWithEvents;
