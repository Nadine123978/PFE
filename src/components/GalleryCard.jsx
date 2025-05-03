import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const CardGallery = ({ image, title, category, date }) => {
  return (
    <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="160"
        image={image}
        alt={title}
        sx={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
      />
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" color="primary">
          {category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardGallery;
