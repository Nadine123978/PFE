import React from "react";
import { Box, Grid, Typography, TextField, Button, MenuItem } from "@mui/material";
import GalleryCard from "../../components/GalleryCard";
import Header from "../../components/Header";

const events = [
  {
    title: "Echo Beats Festival",
    category: "Music",
    date: "May 20, 2029",
    image: "https://via.placeholder.com/300x160?text=Echo+Beats",
  },
  {
    title: "Culinary Delights Festival",
    category: "Food & Culinary",
    date: "May 25, 2029",
    image: "https://via.placeholder.com/300x160?text=Culinary+Delights",
  },
  {
    title: "Artistry Unveiled Expo",
    category: "Art & Design",
    date: "May 15, 2029",
    image: "https://via.placeholder.com/300x160?text=Artistry+Expo",
  },
  {
    title: "Tech Future Expo",
    category: "Technology",
    date: "June 1, 2029",
    image: "https://via.placeholder.com/300x160?text=Tech+Expo",
  },
  // أضف المزيد حسب الحاجة
];

const GalleryPage = () => {
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
        <Button variant="contained" color="secondary">
          + Create New Folder
        </Button>
      </Box>

      <Grid container spacing={3}>
        {events.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <GalleryCard {...event} />
          </Grid>
        ))}
      </Grid>
    </Box>
    </Box>
  );
};

export default GalleryPage;

