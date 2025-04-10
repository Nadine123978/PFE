import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "../components/ProgressCircle";

const PopularEvents = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const eventData = [
    { category: "Music", percentage: 40, events: "20,000" },
    { category: "Sports", percentage: 35, events: "17,500" },
    { category: "Fashion", percentage: 15, events: "12,500" },
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="20px"
      backgroundColor={colors.primary[400]}
      padding="20px"
      borderRadius="10px"
    >
      <Typography variant="h6" color={colors.grey[100]}>
        Popular Events
      </Typography>
      {eventData.map((event, index) => (
        <Box
          key={index}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          padding="10px"
          borderBottom={`2px solid ${colors.primary[500]}`}
        >
          <Typography color={colors.grey[100]}>{event.category}</Typography>
          <Typography color={colors.grey[100]}>
            {event.percentage}% ({event.events})
          </Typography>
          <ProgressCircle
            value={event.percentage}
            size="40"
            color={colors.grey[100]}
          />
        </Box>
      ))}
    </Box>
  );
};

export default PopularEvents;
