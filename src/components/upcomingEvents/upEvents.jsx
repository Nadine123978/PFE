import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  Button,
  Divider,
} from "@mui/material";
import { CalendarToday } from "@mui/icons-material";

export default function EventCard() {
  return (
    <Card sx={{ width: 300, borderRadius: 4, boxShadow: 3, bgcolor: "#EEF0FF" }}>
      {/* Header */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="120"
          image="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400"
          alt="Event"
        />
        <Chip
          label="Music"
          size="small"
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            backgroundColor: "white",
            color: "#2563eb",
            fontWeight: "bold",
            boxShadow: 1,
          }}
        />
      </Box>

      {/* Content */}
      <CardContent sx={{ py: 1.5 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Rhythm & Beats Music Festival
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Sunset Park, Los Angeles, CA
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt: 0.5,
            display: "-webkit-box",
            overflow: "hidden",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          Immerse yourself in electrifying performances by top pop, rock, EDM, and hip-hop artists.
        </Typography>
      </CardContent>

      {/* Footer */}
      <Divider />
      <Box
        sx={{
          px: 2,
          py: 1.5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <CalendarToday sx={{ fontSize: 16, color: "purple" }} />
            <Typography variant="caption">Apr 20, 2029</Typography>
          </Box>
          <Typography variant="caption">12:00 PM - 11:00 PM</Typography>
        </Box>

        <Button
          variant="contained"
          size="small"
          sx={{ bgcolor: "pink.500", textTransform: "none", fontWeight: 500 }}
        >
          View
        </Button>
      </Box>
    </Card>
  );
}
