import {
  Box, useTheme, IconButton, MenuItem, Select, InputBase, Button, Modal, Grid, Typography, TextField
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Header from "../../components/Header";
import AdventureCard from "../../components/EventCard";
import { tokens } from "../../theme";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const Event = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selectedTab, setSelectedTab] = useState("Active");
  const [view, setView] = useState("grid");
  const [category, setCategory] = useState("All Category");
  const [dateRange, setDateRange] = useState("This Month");
  const [events, setEvents] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:8081/api/events");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, ml: "250px", width: "calc(100vw - 250px)" }}>
      <Header title="Events" subtitle="Dashboard / Events" />

      {/* Filter Bar */}
      <Box sx={{ display: "flex", flexDirection: "row", gap: "20px", mb: "20px", backgroundColor: colors.primary[300], alignItems: "center", flexWrap: "wrap" }}>
        {["Active", "Draft", "Past"].map((tab) => (
          <Button
            key={tab}
            variant={selectedTab === tab ? "contained" : "outlined"}
            color="secondary"
            onClick={() => setSelectedTab(tab)}
            sx={{ borderRadius: "20px", padding: "10px 20px", backgroundColor: selectedTab === tab ? "#F36BF9" : "", color: selectedTab === tab ? "#fff" : "" }}
          >
            {tab} ({tab === "Active" ? 48 : tab === "Draft" ? 22 : 32})
          </Button>
        ))}

        {/* Create Event Button */}
        <Button variant="contained" color="error" onClick={handleOpen}>
          Create Event
        </Button>

        {/* Search Bar */}
        <Box display="flex" alignItems="center" bgcolor="#fff" borderRadius="999px" px="10px" width="250px">
          <SearchIcon sx={{ color: "#2f3a84", fontSize: "18px", mr: 1 }} />
          <InputBase placeholder="Search events..." fullWidth />
        </Box>

        {/* Filter Icon */}
        <IconButton sx={{ backgroundColor: "#2f3a84", color: "#fff", borderRadius: "999px", width: "36px", height: "36px" }}>
          <FilterAltIcon fontSize="small" />
        </IconButton>

        {/* Category Filter */}
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          size="small"
          sx={{ borderRadius: "999px", backgroundColor: "#fff", fontSize: "14px", px: 2, height: "36px", minWidth: "140px" }}
          displayEmpty
          startAdornment={<FilterAltIcon sx={{ color: "#2f3a84", fontSize: "18px", mr: 1 }} />}
        >
          <MenuItem value="All Category">All Category</MenuItem>
          <MenuItem value="Workshop">Workshop</MenuItem>
          <MenuItem value="Conference">Conference</MenuItem>
        </Select>

        {/* Date Range Filter */}
        <Select
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          size="small"
          sx={{ borderRadius: "999px", backgroundColor: "#fff", fontSize: "14px", px: 2, height: "36px", minWidth: "130px" }}
          displayEmpty
          startAdornment={<CalendarMonthIcon sx={{ color: "#2f3a84", fontSize: "18px", mr: 1 }} />}
        >
          <MenuItem value="This Month">This Month</MenuItem>
          <MenuItem value="Next Month">Next Month</MenuItem>
        </Select>

        {/* View Toggle */}
        <Box display="flex" alignItems="center" bgcolor="#dfe3ff" borderRadius="999px" p="3px">
          <IconButton onClick={() => setView("grid")} sx={{ bgcolor: view === "grid" ? "#2f3a84" : "transparent", color: view === "grid" ? "#fff" : "#2f3a84", borderRadius: "999px", mx: "2px" }}>
            <GridViewIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={() => setView("list")} sx={{ bgcolor: view === "list" ? "#2f3a84" : "transparent", color: view === "list" ? "#fff" : "#2f3a84", borderRadius: "999px", mx: "2px" }}>
            <ViewListIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* Event Cards */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "flex-start", borderRadius: "20px", padding: "10px", bgcolor: colors.primary[300] }}>
        {events.map((event) => (
          <Link key={event.id} to={`/event-details/${event.id}`}>
            <AdventureCard event={event} />
          </Link>
        ))}
      </Box>

      {/* Modal for Creating Event */}
      <Modal open={openModal} onClose={handleClose}>
        <Box sx={style}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h5">CREATE EVENT</Typography>
            <IconButton onClick={handleClose}><CloseIcon /></IconButton>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Title" defaultValue="Music Awards" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Add Sponsors" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Description" multiline minRows={3} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Add Guest" />
            </Grid>
            <Grid item xs={3}>
              <TextField fullWidth label="Day" />
            </Grid>
            <Grid item xs={3}>
              <TextField fullWidth label="Hour" />
            </Grid>
            <Grid item xs={3}>
              <TextField fullWidth label="Minute" />
            </Grid>
            <Grid item xs={3}>
              <TextField fullWidth label="Duration" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Location" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Set Reminder" />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="error" fullWidth>
                CREATE EVENT
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};

export default Event;
