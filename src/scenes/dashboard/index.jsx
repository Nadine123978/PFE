import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import TicketsSold from "../../components/TicketsSold";
import SalesRevenue from "../../components/SalesRevenue";
import PopularEvents from "../../components/PopularEvents";
import EventsSection from "../../components/EventsSection";

import Invoices from "../../components/invoices";
import SmallCalender from "../../components/SmallCalender";
import EventCard from "../../components/upcomingEvents/upEvents";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
  component="main"
  sx={{
    flexGrow: 1,
    p: 3,
    marginLeft: "250px",
      
  }}
>
  {/* HEADER */}
  <Box display="flex" justifyContent="space-between" alignItems="center" mb="20px">
    <Header title="DASHBOARD" subtitle="Hello Oriando, welcome back!" />
  </Box>

  {/* GRID & CHARTS */}
  <Box
    display="grid"
    gridTemplateColumns="repeat(12, 1fr)"
    gap="20px"
    sx={{
      backgroundColor: colors.primary[300],
      borderRadius: "25px",
      padding: "15px",
    }}
  >
    {/* ROW 1 */}
    <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center" borderRadius="10px">
      <StatBox
        title="Upcoming Events"
        value="345"
        icon={<EmailIcon sx={{ color: colors.primary[500], fontSize: "26px" }} />}
      />
    </Box>

    <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center" borderRadius="10px">
      <StatBox
        title="Total Bookings"
        value="1798"
        icon={<PointOfSaleIcon sx={{ color: colors.primary[500], fontSize: "26px" }} />}
      />
    </Box>

    <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center" borderRadius="10px">
      <StatBox
        title="Tickets Sold"
        value="1250"
        icon={<PersonAddIcon sx={{ color: colors.primary[500], fontSize: "26px" }} />}
      />
    </Box>

    <Box
  gridColumn="span 3" // أكبر بمساحة كافية
  display="flex"
  alignItems="center"
  justifyContent="center"
  padding="20px"
  backgroundColor={colors.primary[400]}
  borderRadius="10px"
>
  <EventCard />
</Box>


    {/* ROW 2 */}
    <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} borderRadius="10px" p="20px">
      <TicketsSold />
    </Box>

    <Box gridColumn="span 5" gridRow="span 2" backgroundColor={colors.primary[400]} borderRadius="10px" p="20px">
      <SalesRevenue />
    </Box>

    <Box gridColumn="span 3" backgroundColor={colors.primary[400]} borderRadius="10px" p="20px">
      <PopularEvents />
    </Box>

    {/* ROW 3 */}
    <Box gridColumn="span 4" backgroundColor={colors.primary[400]} borderRadius="10px" p="20px">
      <SmallCalender />
    </Box>

    <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} borderRadius="10px" p="20px">
      <EventsSection />
    </Box>

    <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} borderRadius="10px" p="20px">
      <Invoices />
    </Box>
  </Box>
</Box>

  );
};

export default Dashboard;
