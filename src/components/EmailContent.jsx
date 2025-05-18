import React from "react";
import { Box, Typography, Divider } from "@mui/material";

export default function EmailContent({ message }) {
  if (!message) {
    return (
      <Box width="55%" p={3} sx={{ overflowY: "auto" }}>
        <Typography variant="h6" color="text.secondary">
          Please select a message to view its details.
        </Typography>
      </Box>
    );
  }

  return (
    <Box width="55%" p={3} sx={{ overflowY: "auto" }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {message.fullName} &lt;{message.email}&gt;
      </Typography>
      <Typography variant="caption" display="block" gutterBottom color="text.secondary">
        {new Date(message.createdAt).toLocaleString()}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="body2" paragraph>
        {message.message}
      </Typography>
    </Box>
  );
}
