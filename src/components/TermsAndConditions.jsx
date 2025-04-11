import React from 'react';
import { Card, CardContent, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

export default function TermsAndConditions() {
  return (
    <Card sx={{ borderRadius: 4, p: 3 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Terms & Conditions
        </Typography>

        {/* Section 1: Ticket Purchase and Entry */}
        <Box mb={3}>
          <Typography variant="subtitle1" fontWeight="bold">1. Ticket Purchase and Entry</Typography>
          <List dense>
            <ListItem>
              <ListItemText primary="All attendees must possess a valid ticket for entry." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Tickets are non-refundable and non-transferable unless specified by the event organizer." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Attendees must present a valid government-issued ID along with their ticket at the gate." />
            </ListItem>
          </List>
        </Box>

        {/* Section 2: Security and Safety */}
        <Box mb={3}>
          <Typography variant="subtitle1" fontWeight="bold">2. Security and Safety</Typography>
          <List dense>
            <ListItem>
              <ListItemText primary="Attendees are subject to security checks, including bag inspections, upon entry." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Prohibited items include weapons, drugs, alcohol, fireworks, and other hazardous materials." />
            </ListItem>
            <ListItem>
              <ListItemText primary="The event organizer reserves the right to deny entry to individuals deemed a security risk." />
            </ListItem>
          </List>
        </Box>

        {/* Section 3: Code of Conduct */}
        <Box mb={3}>
          <Typography variant="subtitle1" fontWeight="bold">3. Code of Conduct</Typography>
          <List dense>
            <ListItem>
              <ListItemText primary="Attendees are expected to behave responsibly and respectfully toward others." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Any disruptive behavior, harassment, or illegal activity will result in immediate removal from the event without refund." />
            </ListItem>
          </List>
        </Box>

        {/* Section 4: Event Schedule and Changes */}
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">4. Event Schedule and Changes</Typography>
          <List dense>
            <ListItem>
              <ListItemText primary="The event schedule is subject to change without prior notice." />
            </ListItem>
            {/* يمكن إضافة البنود التالية لاحقًا إذا ظهرت في القائمة الكاملة */}
          </List>
        </Box>
      </CardContent>
    </Card>
  );
}
