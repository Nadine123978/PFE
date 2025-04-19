import { useState } from "react";
import { Calendar } from "lucide-react";
import FullCalendar from "@fullcalendar/react"; // استيراد FullCalendar
import dayGridPlugin from "@fullcalendar/daygrid"; // استيراد dayGrid plugin
import interactionPlugin from "@fullcalendar/interaction"; // استيراد interaction plugin
import timeGridPlugin from "@fullcalendar/timegrid"; // استيراد timeGrid plugin


import { Box, Typography, Button, useTheme } from "@mui/material";
import { Add } from "@mui/icons-material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

const Calendarpage = () => {
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Enter event title:");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
        extendedProps: {
          category: "Meeting", // يمكنك تغييره حسب النوع
        },
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'?`
      )
    ) {
      selected.event.remove();
    }
  };

  const eventCounts = {
    All: currentEvents.length,
    Event: currentEvents.filter((e) => e.extendedProps?.category === "Event")
      .length,
    Meeting: currentEvents.filter(
      (e) => e.extendedProps?.category === "Meeting"
    ).length,
    Setup: currentEvents.filter((e) => e.extendedProps?.category === "Setup")
      .length,
  };

  const RenderTopCounters = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <Box
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        gap="20px"
        marginBottom="25px"
      >
        {[
          { label: "All Schedules", value: eventCounts.All },
          { label: "Event", value: eventCounts.Event },
          { label: "Meeting", value: eventCounts.Meeting },
          { label: "Setup and Rehearsal", value: eventCounts.Setup },
        ].map((item, idx) => (
          <Box
            key={idx}
            bgcolor="#f3e8ff"
            borderRadius="12px"
            p="16px"
            textAlign="center"
          >
            <Typography variant="h6" color="#7c3aed">
              {item.label}
            </Typography>
            <Typography variant="h4" fontWeight="bold" color="#7c3aed">
              {item.value} Agenda
            </Typography>
            <Box
              gridColumn="span 3"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <CalendarTodayOutlinedIcon
                sx={{ color: colors.primary[500], fontSize: "20px" }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    );
  };

  const eventColor = (category) => {
    switch (category) {
      case "Event":
        return "#fbcfe8";
      case "Meeting":
        return "#dbeafe";
      case "Setup":
        return "#e0e7ff";
      default:
        return "#f5f5f5";
    }
  };

  const RenderEventContent = (eventInfo) => {
    const bgColor = eventColor(eventInfo.event.extendedProps?.category);
    return (
      <div
        style={{
          backgroundColor: bgColor,
          padding: "4px 8px",
          borderRadius: "6px",
          fontSize: "0.85rem",
          overflow: "hidden",
        }}
      >
        <strong>{eventInfo.timeText}</strong>
        <div>{eventInfo.event.title}</div>
      </div>
    );
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, ml: "250px", width: "calc(100vw - 250px)" }}>
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
      {RenderTopCounters()}

      <Box
        mb="16px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h5" fontWeight="bold">
          May 2029
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#e879f9",
            color: "#fff",
            borderRadius: "20px",
          }}
          startIcon={<Add />}
        >
          New Agenda
        </Button>
      </Box>

      <FullCalendar
        height="75vh"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        select={handleDateClick}
        eventClick={handleEventClick}
        eventsSet={(events) => setCurrentEvents(events)}
        eventContent={RenderEventContent}
        initialEvents={[
          {
            id: "1",
            title: "Team Brainstorming",
            start: "2029-05-01T15:00:00",
            extendedProps: {
              category: "Meeting",
            },
          },
          {
            id: "2",
            title: "Final Event Report",
            start: "2029-05-09T10:00:00",
            extendedProps: {
              category: "Event",
            },
          },
          {
            id: "3",
            title: "Stage Setup",
            start: "2029-05-17T07:00:00",
            extendedProps: {
              category: "Setup",
            },
          },
        ]}
      />
    </Box>
  );
};

export default Calendarpage;
