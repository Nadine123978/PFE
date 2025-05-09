import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const CardGallery = ({ image, title, category, date }) => {
  return (
    <Card sx={{ borderRadius: 4, boxShadow: 3, overflow: "hidden" }}>
  <CardMedia
    component="img"
    height="160"
    image={image}
    alt={title}
    sx={{
      objectFit: "cover",
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    }}
  />
  <CardContent sx={{ p: 2 }}>
    <Typography variant="h6" fontWeight="bold">
      {title}
    </Typography>
    <Typography variant="body2" color="primary" sx={{ display: "inline", mr: 1 }}>
      {category}
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ display: "inline" }}>
      • {date}
    </Typography>
  </CardContent>
</Card>
  );
};

export default CardGallery;
