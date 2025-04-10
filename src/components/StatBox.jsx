import { Box, Typography } from "@mui/material";

const StatBox = ({ title, value, icon }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p="15px"
      borderRadius="12px"
      sx={{
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "300px",
        margin: "10px auto",
      }}
    >
      {/* أيقونة */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: "#F36BF9",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
        }}
      >
        {icon}
      </Box>

      {/* النصوص */}
      <Box>
        <Typography
          variant="subtitle2"
          sx={{ color: "gray", fontSize: "14px", fontWeight: "500" }}
        >
          {title}
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: "#37437D", fontWeight: "700", marginTop: "5px" }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
