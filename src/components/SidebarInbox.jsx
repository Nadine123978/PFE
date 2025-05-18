import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Divider, Chip } from "@mui/material";

export default function Sidebar() {
  return (
    <Box
      width="15%"
      bgcolor="#f9f9f9"
      p={2}
      borderRight="1px solid #ddd"
      sx={{ overflowY: "auto" }}
    >
      {/* Inbox Section */}
      <Box mb={3} p={2} bgcolor="#fff" borderRadius={2} boxShadow={1}>
        <Typography variant="h6" fontWeight="bold" mb={2} color="#C400FF">
          Inbox
        </Typography>
        <List>
          {["Starred", "Sent", "Drafts", "Spam", "Trash"].map((item) => (
            <ListItem button key={item}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Labels Section */}
      <Box p={2} bgcolor="#fff" borderRadius={2} boxShadow={1}>
        <Typography variant="subtitle2" fontWeight="bold" mb={1}>
          Labels
        </Typography>
        <List>
          <ListItem>
            <Chip label="Customer" color="primary" size="small" />
          </ListItem>
          <ListItem>
            <Chip label="Sponsor" color="secondary" size="small" />
          </ListItem>
          <ListItem>
            <Chip label="Partner" color="success" size="small" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
