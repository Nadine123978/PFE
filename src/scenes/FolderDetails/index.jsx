// FolderDetailsPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import axios from "axios";

const FolderDetailsPage = () => {
  const { id } = useParams(); // folder id
  const [folder, setFolder] = useState(null);
  const [images, setImages] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState("");

  useEffect(() => {
    const fetchFolder = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/api/gallery/folder/${id}`);
        setFolder(response.data.folder);
        setImages(response.data.images); // assume API returns { folder, images }
      } catch (error) {
        console.error("❌ Error fetching folder details:", error);
      }
    };

    fetchFolder();
  }, [id]);

  const handleAddImage = async () => {
    try {
      await axios.post(`http://localhost:8081/api/gallery/image`, {
        imageUrl: newImageUrl,
        folder: { id: folder.id },
      });
      setImages([...images, { imageUrl: newImageUrl }]);
      setOpenDialog(false);
      setNewImageUrl("");
    } catch (error) {
      console.error("❌ Error adding image:", error);
    }
  };

  if (!folder) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" mb={2}>
        Gallery for Event: {folder.event.title}
      </Typography>
      <Button variant="contained" onClick={() => setOpenDialog(true)} sx={{ mb: 2 }}>
        + Add Image
      </Button>

      <Grid container spacing={2}>
        {images.map((img, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={
                  img.imageUrl.startsWith("http")
                    ? img.imageUrl
                    : `http://localhost:8081${img.imageUrl}`
                }
                alt={`Gallery Image ${index}`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add Image Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Add New Image</DialogTitle>
        <DialogContent>
          <TextField
            label="Image URL"
            fullWidth
            value={newImageUrl}
            onChange={(e) => setNewImageUrl(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleAddImage}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default FolderDetailsPage;
