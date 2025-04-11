import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const EventPoster = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: 4,
        borderRadius: 2,
        bgcolor: '#1e1e2e',
        color: 'white',
      }}
    >
      <Typography variant="h3" gutterBottom>
        Echo Beats Festival
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        May 20, 2029 @ 6:00 PM <br />
        Sunset Park, Los Angeles, CA
      </Typography>
      <Typography variant="body2" gutterBottom>
        Join us for an unforgettable evening featuring top EDM, pop, and hip-hop artists. Enjoy food trucks, art installations, and exclusive VIP lounges.
      </Typography>
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Tickets Sold: 21,000 / 30,000
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ marginTop: 1 }}>
        Starting from $60
      </Typography>
      <Button variant="contained" sx={{ marginTop: 2, bgcolor: '#ff6d75' }}>
        Buy Tickets Now
      </Button>
    </Box>
  );
};

export default EventPoster;
