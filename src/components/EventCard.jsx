import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  LinearProgress,
  Stack,
  IconButton,
} from "@mui/material";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";

const AdventureCard = () => {
  const [events, setEvents] = useState([]);
  const [statusFilter, setStatusFilter] = useState("active");

  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/events?status=${statusFilter}`)
      .then((response) => setEvents(response.data))
      .catch((error) => console.error("حدث خطأ أثناء جلب البيانات:", error));
  }, [statusFilter]);

  const handleDeleteEvent = (id) => {
    axios
      .delete(`http://localhost:8081/api/events/${id}`)
      .then(() => {
        setEvents((prev) => prev.filter((event) => event.id !== id));
      })
      .catch((error) => console.error("خطأ أثناء الحذف:", error));
  };

  const handleUpdateEvent = (id, updatedField) => {
    axios
      .put(`http://localhost:8081/api/events/${id}`, updatedField)
      .then(() => {
        setEvents((prev) =>
          prev.map((event) =>
            event.id === id ? { ...event, ...updatedField } : event
          )
        );
      })
      .catch((error) => console.error("خطأ أثناء التحديث:", error));
  };

  if (!events || events.length === 0)
    return <div>لا يوجد أحداث حالياً.</div>;

  return (
    <Box>
      <Stack direction="row" flexWrap="wrap" gap={3}>
        {events.map((event) => {
          const {
            id,
            title,
            description,
            date,
            category,
            location,
            totalTickets,
            soldTickets,
          } = event;

          const progress =
            totalTickets > 0 ? (soldTickets / totalTickets) * 100 : 0;

          return (
            <Card
              key={id}
              sx={{
                borderRadius: 5,
                width: 270,
                bgcolor: "#fefcff",
                overflow: "hidden",
                boxShadow: 4,
                position: "relative",
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
                alt={title}
              />
              <CardContent>
                <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                  <Chip
                    label={`Category: ${category?.name || "?"}`}
                    size="small"
                    sx={{
                      bgcolor: "#e3e2fb",
                      color: "#4a4bc4",
                      fontWeight: "bold",
                      borderRadius: 2,
                    }}
                  />
                  <Chip
                    label={statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1)}
                    size="small"
                    sx={{
                      bgcolor: "#fce4fd",
                      color: "#d600c0",
                      fontWeight: "bold",
                      borderRadius: 2,
                    }}
                  />
                </Stack>

                <Typography
                  variant="body2"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    handleUpdateEvent(id, { date: e.target.innerText })
                  }
                  sx={{ color: "text.secondary" }}
                >
                  {new Date(date).toLocaleString()}
                </Typography>

                <Typography
                  variant="h6"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    handleUpdateEvent(id, { title: e.target.innerText })
                  }
                  sx={{ mt: 0.5, fontWeight: "bold" }}
                >
                  {title}
                </Typography>

                <Typography
                  variant="body2"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    handleUpdateEvent(id, { description: e.target.innerText })
                  }
                  sx={{
                    mt: 0.5,
                    color: "text.secondary",
                  }}
                >
                  {description}
                </Typography>

                <Typography
                  variant="body2"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    handleUpdateEvent(id, {
                      location: { ...location, name: e.target.innerText },
                    })
                  }
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mt: 0.5,
                  }}
                >
                  📍 {location?.name || "Unknown"}
                </Typography>

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
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ mt: 1 }}
                  >
                    <Typography
                      variant="body2"
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) =>
                        handleUpdateEvent(id, {
                          soldTickets: parseInt(e.target.innerText),
                        })
                      }
                      sx={{ fontWeight: "bold" }}
                    >
                      {Math.round(progress)}%
                    </Typography>
                    <Typography
                      variant="body2"
                      color="secondary"
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) =>
                        handleUpdateEvent(id, {
                          totalTickets: parseInt(e.target.innerText),
                        })
                      }
                      sx={{ fontWeight: "bold" }}
                    >
                      {soldTickets}/{totalTickets}
                    </Typography>
                  </Stack>
                </Box>

                {/* زر الحذف */}
                <IconButton
                  color="error"
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteEvent(id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </Box>
  );
};

export default AdventureCard;
