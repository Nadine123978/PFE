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
import { useNavigate } from 'react-router-dom';

// داخل الكود




const GalleryPage = () => {
  
const [selectedEventId, setSelectedEventId] = useState("");
  const [events, setEvents] = useState([]);
  const [galleries, setGalleries] = useState({});
  const [openDialog, setOpenDialog] = useState(false); // ✅ داخل الـ component
  const [folderName, setFolderName] = useState(""); // ✅ تعريف اسم الفولدر
  const [folders, setFolders] = useState([]); // حفظ المجلدات

const navigate = useNavigate();

const handleCardClick = (folderId) => {
  // الانتقال إلى صفحة المجلد باستخدام navigate
  navigate(`/folder/${folderId}`);
};


   // جلب المجلدات من الـ API
  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const response = await axios.get("http://localhost:8081/api/folder/all"); // API المجلدات
        setFolders(response.data); // تخزين المجلدات في الـ state
      } catch (error) {
        console.error("❌ Error fetching folders:", error);
      }
    };

    fetchFolders();
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
  {folders.map((folder, index) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={folder.id || index}>
      <Card sx={{ mb: 1, cursor: "pointer" }} onClick={() => handleCardClick(folder.id)}>
       
        <GalleryCard
          image={folder.imageUrl}
          title={folder.event?.title}
          category={folder.event?.category?.name}
          date={folder.event?.date}
        />
      </Card>
    </Grid>
  ))}
</Grid>

      </Box>

     {/* ✅ Dialog لإنشاء فولدر */}
{/* ✅ Dialog لإنشاء فولدر */}
<Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
  <DialogTitle>Create New Folder</DialogTitle>
  <DialogContent>
    {/* Select لاختيار الحدث */}
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

    {/* Input لاسم الفولدر */}
    <TextField
      label="Folder Name"
      fullWidth
      value={folderName}
      onChange={(e) => setFolderName(e.target.value)}
      variant="outlined"
      margin="dense"
    />
  </DialogContent>

  <DialogActions>
    <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
    <Button
      onClick={async () => {
        try {
          // إرسال الـ eventId مع اسم الفولدر
          await axios.post("http://localhost:8081/api/folder", {
            name: folderName,
            event: { id: selectedEventId },
          });
          console.log("✅ Folder created!");
        } catch (error) {
          console.error("❌ Error creating folder:", error);
        }
        setOpenDialog(false);
        setFolderName("");
        setSelectedEventId("");
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
