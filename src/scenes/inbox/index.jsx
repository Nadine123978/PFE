import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import Sidebar from "../../components/SidebarInbox";
import EmailList from "../../components/EmailList";
import EmailContent from "../../components/EmailContent";

const event = {
  title: "Rhythm & Beats Music Festival",
};

export default function EmailInterface() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        ml: "250px", // إذا في سايدبار
        width: "calc(100vw - 250px)",
        display: "flex", flexDirection: "column",
      }}
    >
      {/* Header always on top */}
 
        <Header title={event.title} subtitle={`Dashboard / Events / ${event.title}`} />
      <Box display="flex" gap={4} mt={2} alignItems="flex-start">
        {/* Left Column */}
        <Box flex={2} display="flex" flexDirection="column" gap={3}>

        <Sidebar />
        <EmailList />
        <EmailContent />
      </Box>
      </Box>
    </Box>
  );
}
