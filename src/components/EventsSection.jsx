import { Box, Typography, Card, CardMedia, CardContent, Chip, Stack } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";

const EventsSection = () => {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
        maxWidth: 250,
      }}
    >
      {/* التصنيف */}
      <Box position="absolute" m={1}>
        <Chip label="Sport" color="primary" size="small" sx={{ backgroundColor: "#e0e0ff", color: "#2b2bff" }} />
      </Box>

      {/* الصورة */}
      <CardMedia
        component="img"
        height="140"
        image="https://images.unsplash.com/photo-1601758123927-196d1dfb7c3b" // 🔄 بدّلها بصورة الحدث الفعلية
        alt="Event"
        sx={{ borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }}
      />

      {/* المحتوى */}
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold">
          Champions League Screening Night
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={0.5}>
          SkyDome Stadium, Toronto, ON
        </Typography>

        {/* التاريخ والسعر */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" mt={2}>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <EventIcon sx={{ fontSize: 16, color: "gray" }} />
            <Typography variant="caption" color="text.secondary">
              Apr 20, 2029
            </Typography>
          </Stack>

          <Typography variant="subtitle2" color="#f36bf9" fontWeight="bold">
            $30
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default EventsSection;
