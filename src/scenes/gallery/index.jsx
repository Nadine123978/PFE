import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  MenuItem,
  Card,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";

import GalleryCard from "../../components/GalleryCard";
import Header from "../../components/Header";
import axios from "axios";



const GalleryPage = () => {
  
const [selectedEventId, setSelectedEventId] = useState("");
  const [events, setEvents] = useState([]);
  const [galleries, setGalleries] = useState({});
  const [openDialog, setOpenDialog] = useState(false); // ✅ داخل الـ component
  const [folderName, setFolderName] = useState(""); // ✅ تعريف اسم الفولدر

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:8081/api/events/all");
        setEvents(response.data);
      } catch (error) {
        console.error("❌ Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const fetchGalleryByEvent = async (eventId) => {
    try {
      const response = await axios.get(`http://localhost:8081/api/gallery/event/${eventId}`);
      setGalleries((prev) => ({ ...prev, [eventId]: response.data }));
    } catch (error) {
      console.error(`❌ Error fetching gallery for event ${eventId}:`, error);
    }
  };

  useEffect(() => {
    events.forEach((event) => {
      if (!galleries[event.id]) {
        fetchGalleryByEvent(event.id);
      }
    });
  }, [events]);

  useEffect(() => {
  const fetchAvailableEvents = async () => {
    try {
      const response = await axios.get("http://localhost:8081/api/events/no-folders");
      setEvents(response.data); // هيدي المصفوفة حتكون بس الأحداث يلي ما عندها folders
    } catch (error) {
      console.error("❌ Error fetching available events:", error);
    }
  };

  fetchAvailableEvents();
}, []);


  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, ml: "250px", width: "calc(100vw - 250px)" }}>
      <Header title="Gallery" subtitle="Dashboard / Gallery" />
      <Box p={4}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <TextField label="Search event" variant="outlined" />
          <TextField select label="All Category" defaultValue="all" sx={{ minWidth: 150 }}>
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="music">Music</MenuItem>
            <MenuItem value="tech">Technology</MenuItem>
          </TextField>
          <TextField select label="This Week" defaultValue="week" sx={{ minWidth: 150 }}>
            <MenuItem value="week">This Week</MenuItem>
            <MenuItem value="month">This Month</MenuItem>
          </TextField>
          <Button variant="contained" color="secondary" onClick={() => setOpenDialog(true)}>
            + Create New Folder
          </Button>
        </Box>

        <Grid container spacing={3}>
          {events.map((event, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={event.id || index}>
              <GalleryCard
                title={event.title}
                category={event.category?.name || "Unknown"}
                date={event.date}
                image={
                  event.imageUrl?.startsWith("http")
                    ? event.imageUrl
                    : `http://localhost:8081${event.imageUrl}`
                }
              />
              <Box mt={2}>
                {(galleries[event.id] || []).map((item, i) => (
                  <Card key={i} sx={{ mb: 1 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={
                        item.imageUrl?.startsWith("http")
                          ? item.imageUrl
                          : `http://localhost:8081${item.imageUrl}`
                      }
                      alt={`Gallery item ${i}`}
                    />
                  </Card>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

     {/* ✅ Dialog لإنشاء فولدر */}
<Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
  <DialogTitle>Create New Folder</DialogTitle>
  <DialogContent>
    <TextField
  select
  label="Select Event"
  fullWidth
  value={selectedEventId}
  onChange={(e) => setSelectedEventId(e.target.value)}
  variant="outlined"
  margin="dense"
>
  {events
    .filter((event) => !galleries[event.id] || galleries[event.id].length === 0) // ✅ بس يلي ما عندهم folders
    .map((event) => (
      <MenuItem key={event.id} value={event.id}>
        {event.title} - {event.category?.name}
      </MenuItem>
    ))}
</TextField>

  </DialogContent>
  <DialogActions>
    <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
    <Button
      onClick={async () => {
        try {
          // إرسال الـ eventId مع الفولدر
          await axios.post("http://localhost:8081/api/gallery/folder", {
            name: folderName,
            event: { id: selectedEventId }, // إرسال الـ eventId
          });
          console.log("✅ Folder created!");
        } catch (error) {
          console.error("❌ Error creating folder:", error);
        }
        setOpenDialog(false);
        setFolderName("");
        setSelectedEventId(""); // إعادة تعيين الـ selectedEventId
      }}
    >
      Create
    </Button>
  </DialogActions>
</Dialog>

    </Box>
  );
};

export default GalleryPage;
