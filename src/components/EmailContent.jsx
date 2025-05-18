import React from "react";
import { Box, Typography, Divider } from "@mui/material";

export default function EmailContent() {
  return (
    <Box width="55%" p={3} sx={{ overflowY: "auto" }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Sound System Confirmation
      </Typography>
      <Typography variant="subtitle2" color="textSecondary">
        Harmony Audio &lt;support@harmonyaudio.com&gt;
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        February 20, 2029 — 02:30 PM
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="body2" paragraph>
        Dear Event Management Team,
      </Typography>

      <Typography variant="body2" paragraph>
        We hope this message finds you well. As the official sound partner for
        the Rhythm & Beats Music Festival, we are reaching out to confirm the
        delivery schedule for the sound system setup.
      </Typography>

      <Typography variant="body2" paragraph>
        Here are a few key points we’d like to discuss:
      </Typography>

      <ol>
        <li>
          <strong>Delivery Timing:</strong> Please confirm the preferred date and
          time for our team to deliver the equipment to Sunset Park.
        </li>
        <li>
          <strong>Access Requirements:</strong> Let us know the details regarding
          venue access, loading dock availability, and any on-site contacts we
          should coordinate with.
        </li>
        <li>
          <strong>Setup Specifications:</strong> We would appreciate it if you
          could share any specific requirements for the stage layout or unique
          aspects of the venue that might impact our installation.
        </li>
        <li>
          <strong>Testing and Rehearsal:</strong> If there is a scheduled time
          for sound testing or rehearsal, kindly let us know so we can ensure
          our team is present for technical support.
        </li>
      </ol>

      <Typography variant="body2" paragraph>
        Please feel free to reach out with any questions or additional
        information you require from our side.
      </Typography>

      <Typography variant="body2" paragraph>
        Looking forward to your confirmation and further instructions.
      </Typography>

      <Typography variant="body2" paragraph>
        Warm regards,
        <br />
        Harmony Audio Team
        <br />
        +1-800-555-8976
        <br />
        support@harmonyaudio.com
      </Typography>
    </Box>
  );
}
