import React, { useEffect, useState } from "react";
import {
  Box,
  List,
  ListItem,
  Typography,
  Avatar,
  Chip,
  Divider,
  TextField,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

export default function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    // استدعاء البيانات من الـ API
    const fetchEmails = async () => {
      try {
        const res = await axios.get("http://localhost:8081/api/emails");
        setEmails(res.data);
      } catch (error) {
        console.error("Error fetching emails", error);
      }
    };

    fetchEmails();
  }, []);

  return (
    <Box width="30%" p={2} borderRight="1px solid #ddd" sx={{ overflowY: "auto" }}>
      <Box display="flex" alignItems="center" mb={2}>
        <TextField fullWidth placeholder="Search for messages" size="small" />
        <IconButton>
          <AddIcon />
        </IconButton>
      </Box>

      <List>
        {emails.length === 0 && <Typography>Loading emails...</Typography>}
        {emails.map((email, index) => (
          <React.Fragment key={index}>
            <ListItem selected={email.selected} alignItems="flex-start">
              <Avatar sx={{ mr: 1 }}>
                {email.avatar ? email.avatar : (email.name ? email.name[0] : "?")}
              </Avatar>
              <Box>
                <Typography fontWeight="bold">{email.title}</Typography>
                <Chip
                  label={email.label ? email.label : "Customer"}
                  size="small"
                  sx={{ mt: 0.5, mb: 1 }}
                />
                <Typography fontSize={12} color="gray">
                  {email.desc}
                </Typography>
                <Typography variant="caption" display="block">
                  {email.time}
                </Typography>
              </Box>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}
