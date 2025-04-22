import { Box, Button, IconButton, MenuItem, Select, InputBase } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateEventModal from '../../components/EventModal';
import Header from "../../components/Header";
import AdventureCard from "../../components/EventCard";
import { tokens } from "../../theme";
import { useState, useEffect } from "react";
import axios from "axios";
import EventCount from "../../components/EventCount";
import { useTheme } from "@mui/material/styles";

const Event = () => {
  const theme = useTheme(); 
  const colors = tokens(theme.palette.mode);

  const [selectedTab, setSelectedTab] = useState("active");
  const [view, setView] = useState("grid");
  const [category, setCategory] = useState("All Category");
  const [dateRange, setDateRange] = useState("This Month");
  const [events, setEvents] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [refreshCount, setRefreshCount] = useState(() => () => {});


  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  useEffect(() => {
    console.log("Selected Tab:", selectedTab);
    fetchEvents(); // جلب الأحداث عند تغيير التبويب
  }, [selectedTab]);
  
  const fetchEvents = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/api/events/by-status?status=${selectedTab}`);
      console.log("Events Response:", response.data);
  
      const currentDate = new Date();
  
      const updatedEvents = response.data.map((event) => {
        const eventStartDate = new Date(event.startDate);
        const eventEndDate = new Date(event.endDate);
  
        let status = "";
  
        // التحقق أولاً إذا الحدث Draft
        if (event.status === "draft") {
          status = "Draft";
        } else if (currentDate < eventStartDate) {
          status = "Upcoming";
        } else if (currentDate > eventEndDate) {
          status = "Past";
        } else {
          status = "Active";
        }
  
        return { ...event, status };
      });
  
      const uniqueEvents = updatedEvents.filter(
        (event, index, self) => index === self.findIndex((e) => e.id === event.id)
      );
  
      setEvents(uniqueEvents);
    } catch (error) {
      console.error("❌ Error fetching events:", error);
    }
  };
  
  const handleDeleteEvent = (id) => {
    axios
    .delete(`http://localhost:8081/api/events/${id}`)

      .then(() => {
        setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
      })
      .catch((error) => {
        console.error("حدث خطأ أثناء حذف الحدث:", error);
      });
  };

  const handleFieldUpdate = (id, field, value) => {
    axios
      .put(`http://localhost:8081/api/events/${id}`, { [field]: value })
      .then(() => fetchEvents())
      .catch((err) => console.error("❌ Error updating:", err));
  };
   
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);


  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchQuery.trim() === "") {
        fetchEvents();
        setNoResults(false);
      } else {
        axios
          .get(`http://localhost:8081/api/events/search?title=${searchQuery}`)
          .then((res) => {
            setEvents(res.data);
            setNoResults(res.data.length === 0);
          })
          .catch((err) => {
            console.error("❌ Error searching events:", err);
            setNoResults(true);
          });
      }
    }, 300);
  
    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);
  
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, ml: "250px", width: "calc(100vw - 250px)" }}>
      <Header title="Events" subtitle="Dashboard / Events" />

      {/* Filter Bar */}
      <Box sx={{ display: "flex", flexDirection: "row", gap: "20px", mb: "20px", backgroundColor: colors.primary[300], alignItems: "center", flexWrap: "wrap" }}>
        {/* استخدم مكون EventCount هنا */}
        <EventCount selectedTab={selectedTab} onTabChange={setSelectedTab}  onCountUpdate={(fn) => setRefreshCount(() => fn)}/> {/* تعديل الكود ليعمل مع onTabChange */}

        <Button variant="contained" color="error" onClick={handleOpen}>
          Create Event
        </Button>

        <CreateEventModal open={openModal} handleClose={handleClose} onEventCreated={fetchEvents} refreshCount={refreshCount} />

        <Box display="flex" alignItems="center" bgcolor="#fff" borderRadius="999px" px="10px" width="250px">
          <SearchIcon sx={{ color: "#2f3a84", fontSize: "18px", mr: 1 }} />
          <InputBase
  placeholder="Search events..."
  fullWidth
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
/>

        </Box>

        <IconButton sx={{ backgroundColor: "#2f3a84", color: "#00", borderRadius: "999px", width: "36px", height: "36px" }}>
          <FilterAltIcon fontSize="small" />
        </IconButton>

        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          size="small"
          sx={{
            borderRadius: "999px",
            backgroundColor: "#fff",
            fontSize: "14px",
            px: 2,
            height: "36px",
            minWidth: "140px"
          }}
          displayEmpty
          startAdornment={<FilterAltIcon sx={{ color: "#2f3a84", fontSize: "18px", mr: 1 }} />}
        >
          <MenuItem value="All Category">All Category</MenuItem>
          <MenuItem value="Workshop">Workshop</MenuItem>
          <MenuItem value="Conference">Conference</MenuItem>
        </Select>

        <Select
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          size="small"
          sx={{
            borderRadius: "999px",
            backgroundColor: "#fff",
            fontSize: "14px",
            px: 2,
            height: "36px",
            minWidth: "130px"
          }}
          displayEmpty
          startAdornment={<CalendarMonthIcon sx={{ color: "#2f3a84", fontSize: "18px", mr: 1 }} />}
        >
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

    {/* Event Cards */}
<Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "flex-start", borderRadius: "20px", padding: "10px", bgcolor: colors.primary[300] }}>
  {/* عرض رسالة No events found فقط إذا كانت القائمة فارغة */}
  {events.length === 0 ? (
    <Box sx={{ width: "100%", textAlign: "center", color: "gray", fontSize: "18px", py: 3 }}>
      No events found.
    </Box>
  ) : (
    events.map((event) => (
      <Box key={event.id} sx={{ position: "relative" }}>
        {/* delete button */}
        <IconButton
          onClick={() => handleDeleteEvent(event.id)}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 10,
            backgroundColor: "#fff",
          }}
        >
          <DeleteIcon sx={{ color: "red" }} />
        </IconButton>

        {/* event card */}
        <AdventureCard
          event={event}
          onDelete={handleDeleteEvent}
          onUpdate={handleFieldUpdate}
        />
      </Box>
    ))
  )}
</Box>

    </Box>
  );
};

export default Event;