import { useParams } from "react-router-dom";
import { Box, Stack, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";

// Components
import EventPoster from "../../components/EventPoster";
import SeatPlan from "../../components/SeatPlan";
import TermsAndConditions from "../../components/TermsAndConditions";
import PackagesList from "../../components/PackagesList";
import OfficialMerchandise from "../../components/OfficialMerchandise";

const EventDetails = () => {
  const { id } = useParams();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        ml: "250px", // إذا في سايدبار
        width: "calc(100vw - 250px)",
      }}
    >
      <Header title="Event Details" subtitle="Dashboard / Events / Details" />

      <Box display="flex" gap={4} mt={2} alignItems="flex-start">
        {/* Left Column */}
        <Box flex={2} display="flex" flexDirection="column" gap={3}>
          <EventPoster />
          <TermsAndConditions />
          <OfficialMerchandise />
        </Box>

        {/* Right Column */}
        <Box flex={1} display="flex" flexDirection="column" gap={3}>
          <SeatPlan />
          <PackagesList />
        </Box>
      </Box>
    </Box>
  );
};

export default EventDetails;
