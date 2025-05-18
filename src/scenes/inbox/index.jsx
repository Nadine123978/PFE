import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import Sidebar from "../../components/SidebarInbox";
import EmailList from "../../components/EmailList";
import EmailContent from "../../components/EmailContent";

const event = {
  title: "Rhythm & Beats Music Festival",
};

export default function EmailInterface() {
  const [selectedMessage, setSelectedMessage] = useState(null);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        ml: "250px",
        width: "calc(100vw - 250px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header title={event.title} subtitle={`Dashboard / Events / ${event.title}`} />

      <Box display="flex" gap={4} mt={2} alignItems="flex-start">
        <Sidebar />

        {/* خصص flex لكل جزء */}
        <EmailList
          onSelectMessage={setSelectedMessage}
          selectedMessage={selectedMessage}
        />

        <EmailContent message={selectedMessage} />
      </Box>
    </Box>
  );
}
