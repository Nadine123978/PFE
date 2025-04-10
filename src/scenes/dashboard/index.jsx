import {
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
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

  // 🎨 ستايل موحّد للكروت
  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
  };

  const iconStyle = {
    color: "#f36bf9",
    fontSize: "28px",
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        marginLeft: "250px",
        backgroundColor: "#f9f9fc",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb="30px">
        <Header title="Dashboard" subtitle="Hello Orlando, welcome back!" />
      </Box>

      {/* GRID */}
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="minmax(140px, auto)" gap="24px">
        
        {/* Row 1 - إحصائيات */}
        <Box gridColumn="span 3" p={2} sx={cardStyle}>
          <StatBox title="Upcoming Events" value="345" icon={<EmailIcon sx={iconStyle} />} />
        </Box>
        <Box gridColumn="span 3" p={2} sx={cardStyle}>
          <StatBox title="Total Bookings" value="1798" icon={<PointOfSaleIcon sx={iconStyle} />} />
        </Box>
        <Box gridColumn="span 3" p={2} sx={cardStyle}>
          <StatBox title="Tickets Sold" value="1250" icon={<PersonAddIcon sx={iconStyle} />} />
        </Box>
        {/* بطاقة الحدث - تأخذ صفين */}
        <Box gridColumn="span 3" gridRow="span 2" p={2} sx={{ ...cardStyle, height: "100%" }}>
          <EventCard />
        </Box>

        {/* Row 2 - محتوى تحليلي */}
        <Box gridColumn="span 4" gridRow="span 2" p={2} sx={{ ...cardStyle, height: "100%" }}>
          <TicketsSold />
        </Box>

        <Box gridColumn="span 5" gridRow="span 1" p={2} sx={cardStyle}>
          <SalesRevenue />
        </Box>

        <Box gridColumn="span 4" gridRow="span 1" p={2} sx={{ ...cardStyle }}>
          <PopularEvents />
        </Box>

        {/* Row 3 - أدوات إضافية */}
        <Box gridColumn="span 4" p={2} sx={{ ...cardStyle, minHeight: "300px" }}>
  <SmallCalender />
</Box>
        <Box gridColumn="span 4" gridRow="span 2" p={2} sx={cardStyle}>
          <EventsSection />
        </Box>
        
        <Box gridColumn="span 4" gridRow="span 2" p={2} sx={cardStyle}>
          <Invoices />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
