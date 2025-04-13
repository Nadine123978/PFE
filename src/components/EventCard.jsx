import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  LinearProgress,
  Stack,
  Button,
} from "@mui/material";

const AdventureCard = ({ event }) => {
  const {
    eventname,
    description,
    eventdate,
    categoryid,
    locationid,
    totaltickets,
    soldtickets,
  } = event;

  const progress = totaltickets > 0 ? (soldtickets / totaltickets) * 100 : 0;

  return (
    <Card
      sx={{
        borderRadius: 5,
        width: 270,
        bgcolor: "#fefcff",
        overflow: "hidden",
        boxShadow: 4,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image="https://i.imgur.com/C3wrmW2.png"
        alt={eventname}
      />
      <CardContent>
        {/* Tags */}
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
        <Chip
  label={`Category #${categoryid}`}
  size="small"
  sx={{
    bgcolor: "#e3e2fb",
    color: "#4a4bc4",
    fontWeight: "bold",
    borderRadius: 2,
  }}
/>

          <Chip
            label="Active"
            size="small"
            sx={{
              bgcolor: "#fce4fd",
              color: "#d600c0",
              fontWeight: "bold",
              borderRadius: 2,
            }}
          />
        </Stack>

        {/* Date & Title */}
        <Typography variant="body2" color="text.secondary">
          {eventdate}
        </Typography>
        <Typography variant="h6" sx={{ mt: 0.5, fontWeight: "bold" }}>
          {eventname}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}
        >
          📍 Location #{locationid}
        </Typography>

        {/* Progress Bar */}
        <Box sx={{ mt: 2 }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 6,
              borderRadius: 5,
              bgcolor: "#eee",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#b057fc",
              },
            }}
          />
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {Math.round(progress)}%
            </Typography>
            <Typography variant="body2" color="secondary" sx={{ fontWeight: "bold" }}>
              {soldtickets}/{totaltickets}
            </Typography>
          </Stack>
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            bgcolor: "#b057fc",
            fontWeight: "bold",
            "&:hover": {
              bgcolor: "#993ce6",
            },
          }}
        >
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default AdventureCard;