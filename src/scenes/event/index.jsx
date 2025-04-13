import {
  Box, useTheme, IconButton, MenuItem, Select, InputBase, Button, 
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import SearchIcon from "@mui/icons-material/Search";
import Header from "../../components/Header";
import AdventureCard from "../../components/EventCard";
import { tokens } from "../../theme";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const Event = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selectedTab, setSelectedTab] = useState("Active");
  const [view, setView] = useState("grid");
  const [category, setCategory] = useState("All Category");
  const [dateRange, setDateRange] = useState("This Month");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/api/events")
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error("Error fetching events:", error);
      });
  }, []);

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
      <Header title="Events" subtitle="Dashboard / Events" />

      <Box sx={{ display: "flex", flexDirection: "row", gap: "20px", mb: "20px", backgroundColor: colors.primary[300], alignItems: "center" }}>
        <Button variant={selectedTab === "Active" ? "contained" : "outlined"} color="secondary" onClick={() => setSelectedTab("Active")} sx={{ borderRadius: "20px", padding: "10px 20px", backgroundColor: selectedTab === "Active" ? "#F36BF9" : "", color: selectedTab === "Active" ? "#fff" : "" }}>Active (48)</Button>
        <Button variant={selectedTab === "Draft" ? "contained" : "outlined"} color="secondary" onClick={() => setSelectedTab("Draft")} sx={{ borderRadius: "20px", padding: "10px 20px", backgroundColor: selectedTab === "Draft" ? "#F36BF9" : "", color: selectedTab === "Draft" ? "#fff" : "" }}>Draft (22)</Button>
        <Button variant={selectedTab === "Past" ? "contained" : "outlined"} color="secondary" onClick={() => setSelectedTab("Past")} sx={{ borderRadius: "20px", padding: "10px 20px", backgroundColor: selectedTab === "Past" ?  "#F36BF9" : "", color: selectedTab === "Past" ? "#fff" : "" }}>Past (32)</Button>

        <Box display="flex" alignItems="center" bgcolor="#fff" borderRadius="999px" px="10px" width="250px">
          <SearchIcon sx={{ color: "#2f3a84", fontSize: "18px", mr: 1 }} />
          <InputBase placeholder="Search events..." fullWidth />
        </Box>

        <IconButton sx={{ backgroundColor: "#2f3a84", color: "#fff", borderRadius: "999px", width: "36px", height: "36px" }}>
          <FilterAltIcon fontSize="small" />
        </IconButton>

        <Select value={category} onChange={(e) => setCategory(e.target.value)} size="small" sx={{ borderRadius: "999px", backgroundColor: "#fff", fontSize: "14px", px: 2, height: "36px", minWidth: "140px" }} displayEmpty startAdornment={<FilterAltIcon sx={{ color: "#2f3a84", fontSize: "18px", mr: 1 }} />}>
          <MenuItem value="All Category">All Category</MenuItem>
          <MenuItem value="Workshop">Workshop</MenuItem>
          <MenuItem value="Conference">Conference</MenuItem>
        </Select>

        <Select value={dateRange} onChange={(e) => setDateRange(e.target.value)} size="small" sx={{ borderRadius: "999px", backgroundColor: "#fff", fontSize: "14px", px: 2, height: "36px", minWidth: "130px" }} displayEmpty startAdornment={<CalendarMonthIcon sx={{ color: "#2f3a84", fontSize: "18px", mr: 1 }} />}>
          <MenuItem value="This Month">This Month</MenuItem>
          <MenuItem value="Next Month">Next Month</MenuItem>
        </Select>

        <Box display="flex" alignItems="center" bgcolor="#dfe3ff" borderRadius="999px" p="3px">
          <IconButton onClick={() => setView("grid")} sx={{ bgcolor: view === "grid" ? "#2f3a84" : "transparent", color: view === "grid" ? "#fff" : "#2f3a84", borderRadius: "999px", mx: "2px" }}>
            <GridViewIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={() => setView("list")} sx={{ bgcolor: view === "list" ? "#2f3a84" : "transparent", color: view === "list" ? "#fff" : "#2f3a84", borderRadius: "999px", mx: "2px" }}>
            <ViewListIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "flex-start", borderRadius: "20px", padding: "10px", bgcolor: colors.primary[300] }}>
      {events.map((event) => (
  <Link key={event.id} to={`/event-details/${event.id}`}>
    <AdventureCard event={event} />
  </Link>
))}

      </Box>
    </Box>
  );
};

export default Event;