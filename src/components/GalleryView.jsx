import React, { useState } from "react";
import axios from "axios"; // أضف axios
import {
  Box,
  Grid,
  Card,
  CardMedia,
  IconButton,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Typography
} from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  Delete,
  AddAPhoto
} from "@mui/icons-material";

const GalleryView = ({ images = [], folderId, setImages }) => {

  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);



  const handleOpen = (index) => {
    if (images.length > 0) {
      setSelectedIndex(index);
      setOpen(true);
    }
  };

  const handleClose = () => setOpen(false);

  const handleNext = () => {
    if (images.length > 0) {
      setSelectedIndex((prev) => (prev + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (images.length > 0) {
      setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const handleDelete = async (index) => {
    const imageId = images[index].id;
    try {
      await axios.delete(`http://localhost:8081/api/images/${imageId}`);
      const newImages = images.filter((_, i) => i !== index);
      setImages(newImages);
      handleClose();
    } catch (err) {
      console.error("Failed to delete image", err);
    }
  };

 const handleAddPhoto = async () => {
  if (!folderId) {
    console.error("Folder ID is not available");
    return;
  }

  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.onchange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(
        `http://localhost:8081/api/folders/${folderId}/images`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" }
        }
      );
      setImages([...images, res.data]);
    } catch (err) {
      console.error("Failed to upload image", err);
    }
  };
  fileInput.click();
};


  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        Folder Gallery
      </Typography>

      <Grid container spacing={2}>
        {images.map((img, index) => (
          <Grid item xs={12} sm={6} md={3} key={img.id}>
            <Card onClick={() => handleOpen(index)} sx={{ cursor: "pointer" }}>
              <CardMedia
                component="img"
                height="180"
                image={img.imageUrl}
                alt={`Image ${index}`}
              />
            </Card>
          </Grid>
        ))}

        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 180,
              border: "2px dashed #aaa"
            }}
            onClick={handleAddPhoto}
          >
            <AddAPhoto fontSize="large" color="action" />
          </Card>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent sx={{ position: "relative", textAlign: "center" }}>
          <IconButton
            onClick={handlePrev}
            sx={{ position: "absolute", top: "50%", left: 10, zIndex: 2 }}
          >
            <ArrowBackIos />
          </IconButton>

          {images.length > 0 && (
            <img
              src={images[selectedIndex].imageUrl}
              alt={`Image ${selectedIndex}`}
              style={{ width: "100%", maxHeight: "80vh", objectFit: "contain" }}
            />
          )}

          <IconButton
            onClick={handleNext}
            sx={{ position: "absolute", top: "50%", right: 10, zIndex: 2 }}
          >
            <ArrowForwardIos />
          </IconButton>

       <IconButton
  onClick={() => handleDelete(selectedIndex)}
  sx={{
    position: "absolute",
    top: 10,
    right: 10,
    color: "black", // تغيير اللون إلى الأسود لجعل الأيقونة تظهر بوضوح
    backgroundColor: "white", // تغيير اللون إلى الأبيض
    padding: 2, // زيادة الحجم بإضافة padding
    borderRadius: "50%", // جعل الزر دائري الشكل
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)", // إضافة ظل خفيف للزر
    ":hover": {
      backgroundColor: "rgba(255, 255, 255, 0.8)", // جعل اللون أبيض مع شفافية عند التمرير
      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.3)" // زيادة تأثير الظل عند التمرير
    }
  }}
>
  <Delete fontSize="large" />
</IconButton>


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default GalleryView;
