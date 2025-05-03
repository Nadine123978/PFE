import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react"; // استيراد FullCalendar
import dayGridPlugin from "@fullcalendar/daygrid"; // استيراد dayGrid plugin
import interactionPlugin from "@fullcalendar/interaction"; // استيراد interaction plugin
import timeGridPlugin from "@fullcalendar/timegrid"; // استيراد timeGrid plugin
import { Box, Typography, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import Header from "../../components/Header";

const Calendarpage = () => {
  const [currentEvents, setCurrentEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/events/by-status?status=active,upcoming")
      .then((res) => res.json())
      .then((data) => {
        const formattedEvents = data.map((event) => ({
          id: event.id,
          title: event.title,
          start: event.startDate, // تأكد من أن startDate في التنسيق الصحيح
         // end: event.endDate || event.startDate, // إذا لم يوجد endDate، استخدم startDate
          extendedProps: {
            category: event.category.name || "Event", // استخدم category.name بدلاً من category
            description: event.description || "No description available", // إذا لم يوجد وصف، استخدم هذا النص البديل
            color: event.status === "active" ? "green" : "blue", // تحديد اللون بناءً على الحالة
          },
        }));

        console.log(formattedEvents); // طباعة الأحداث للتأكد من صحتها

        setCurrentEvents(formattedEvents); // تحديث الـ state
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []); // التأكد من أن الكود يتم تنفيذه مرة واحدة فقط

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, ml: "250px", width: "calc(100vw - 250px)" }}>
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

      <Box mb="16px" display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" fontWeight="bold">
          May 2029
        </Typography>
      </Box>

      <FullCalendar
        height="75vh"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay", // عرض اليوم والأسبوع والشهر
        }}
        initialView="dayGridMonth" // عرض الشهر افتراضيًا
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        events={currentEvents} // عرض الأحداث من الـ state
      />
    </Box>
  );
};

export default Calendarpage;
