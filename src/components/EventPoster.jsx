import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

export default function EventCard() {
  return (
    <Card sx={{ borderRadius: 4, boxShadow: 3, overflow: 'hidden' }}>
      {/* Event Image */}
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="300"
          image="https://images.unsplash.com/photo-1608138379518-46c9bb7fa8fc?auto=format&fit=crop&w=800&q=80"
          alt="Echo Beats Festival"
        />
        <Chip
          label="Music"
          color="primary"
          sx={{ position: 'absolute', top: 16, left: 16 }}
        />
        <Chip
          label="Active"
          color="success"
          sx={{ position: 'absolute', top: 16, right: 16 }}
        />
      </Box>

      {/* Event Content */}
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Echo Beats Festival
        </Typography>

        <Box display="flex" alignItems="center" gap={1} color="text.secondary" mb={1}>
          <CalendarTodayIcon fontSize="small" />
          <Typography variant="body2">May 20, 2029 — 6:00 PM</Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1} color="text.secondary" mb={1}>
          <LocationOnIcon fontSize="small" />
          <Typography variant="body2">Sunset Park, Los Angeles, CA</Typography>
          <Button size="small" sx={{ ml: 1 }} variant="text">Show Map</Button>
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <ConfirmationNumberIcon fontSize="small" />
            <Typography variant="body2">21,000 / 30,000 Tickets Sold</Typography>
          </Box>
          <Typography variant="body2" fontWeight="bold" color="primary">
            Starts from $60
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary">
          The Echo Beats Festival brings together a stellar lineup of artists across EDM, pop, and hip-hop genres.
          Prepare to experience a night of electrifying music, vibrant light shows, and unforgettable performances
          under the stars. Explore food trucks, art installations, and VIP lounges for an elevated experience.
        </Typography>
      </CardContent>
    </Card>
  );
}