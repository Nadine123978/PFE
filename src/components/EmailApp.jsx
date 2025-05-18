import React, { useState } from "react";
import EmailList from "./EmailList";
import EmailContent from "./EmailContent";
import { Box } from "@mui/material";

export default function EmailApp() {
  const [selectedMessage, setSelectedMessage] = useState(null);

  return (
    <Box display="flex" height="100vh" border="1px solid #ccc">
      <EmailList onSelectMessage={setSelectedMessage} selectedMessage={selectedMessage} />
      <EmailContent message={selectedMessage} />
    </Box>
  );
}
