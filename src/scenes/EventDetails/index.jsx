import { useParams } from "react-router-dom";
import { Box, useTheme,Typography, Button } from "@mui/material";
import { tokens } from "../../theme";
import { useState } from "react";
import Header from "../../components/Header";
import EventPoster from "../../components/EventPoster";

const EventDetails = () => {
  const { id } = useParams();  // استخدم useParams للحصول على معرّف الحدث من الرابط
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: "250px",
          width: "calc(100vw - 250px)",
        }}
      >
        <Header title="DEtails Events" subtitle="Dashboard / Events /Details" />

        <EventPoster />
     </Box>
  );
};

export default EventDetails;
