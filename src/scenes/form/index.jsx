import {
  Box,
  useTheme,
  IconButton,
  MenuItem,
  Select,
  InputBase,
  Tabs,
  Tab,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import SearchIcon from "@mui/icons-material/Search";
import Header from "../../components/Header";
import EventCard from "../../components/EventCard";
import { tokens } from "../../theme";
import { useState } from "react";

const Form = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedTab, setSelectedTab] = useState("Active");
  const [view, setView] = useState("grid");

  return (
    <Box m="20px">
      <Header title="Events" subtitle="Dashboard / Events" />

      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: "20px" }}>
        <Tabs
          value={selectedTab}
          onChange={(e, newValue) => setSelectedTab(newValue)}
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab label="Active (48)" value="Active" />
          <Tab label="Draft (22)" value="Draft" />
          <Tab label="Past (32)" value="Past" />
        </Tabs>
      </Box>

      {/* Filters and Search */}
      <Box
        display="flex"
        alignItems="center"
        gap="10px"
        bgcolor="#eef0ff"
        borderRadius="20px"
        p="10px 15px"
        mb="20px"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        {/* Search */}
        <Box
          display="flex"
          alignItems="center"
          bgcolor="#fff"
          borderRadius="999px"
          px="10px"
          width="250px"
        >
          <SearchIcon sx={{ color: "#2f3a84", fontSize: "18px", mr: 1 }} />
          <InputBase placeholder="Search events..." fullWidth />
        </Box>

        {/* Filters */}
        <Box display="flex" alignItems="center" gap="10px" flexWrap="wrap">
          <IconButton
            sx={{
              backgroundColor: "#2f3a84",
              color: "#fff",
              borderRadius: "999px",
              width: "36px",
              height: "36px",
            }}
          >
            <FilterAltIcon fontSize="small" />
          </IconButton>

          <Select
            size="small"
            defaultValue="All Category"
            sx={{
              borderRadius: "999px",
              backgroundColor: "#fff",
              fontSize: "14px",
              px: 2,
              height: "36px",
              minWidth: "140px",
            }}
            displayEmpty
            startAdornment={
              <FilterAltIcon
                sx={{ color: "#2f3a84", fontSize: "18px", mr: 1 }}
              />
            }
          >
            <MenuItem value="All Category">All Category</MenuItem>
            <MenuItem value="Workshop">Workshop</MenuItem>
            <MenuItem value="Conference">Conference</MenuItem>
          </Select>

          <Select
            size="small"
            defaultValue="This Month"
            sx={{
              borderRadius: "999px",
              backgroundColor: "#fff",
              fontSize: "14px",
              px: 2,
              height: "36px",
              minWidth: "130px",
            }}
            displayEmpty
            startAdornment={
              <CalendarMonthIcon
                sx={{ color: "#2f3a84", fontSize: "18px", mr: 1 }}
              />
            }
          >
            <MenuItem value="This Month">This Month</MenuItem>
            <MenuItem value="Next Month">Next Month</MenuItem>
          </Select>

          {/* View Switcher */}
          <Box
            display="flex"
            alignItems="center"
            bgcolor="#dfe3ff"
            borderRadius="999px"
            p="3px"
          >
            <IconButton
              onClick={() => setView("grid")}
              sx={{
                bgcolor: view === "grid" ? "#2f3a84" : "transparent",
                color: view === "grid" ? "#fff" : "#2f3a84",
                borderRadius: "999px",
                transition: "all 0.3s",
                mx: "2px",
              }}
            >
              <GridViewIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={() => setView("list")}
              sx={{
                bgcolor: view === "list" ? "#2f3a84" : "transparent",
                color: view === "list" ? "#fff" : "#2f3a84",
                borderRadius: "999px",
                transition: "all 0.3s",
                mx: "2px",
              }}
            >
              <ViewListIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Event Cards */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="auto"
        gap="20px"
        borderRadius="20px"
        padding="10px"
        bgcolor={colors.primary[300]}
      >
        <Box
          gridColumn="span 4"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <EventCard
            category="Workshop"
            title="React Basics"
            date="2025-04-10"
            time="10:00 AM"
            location="Riyadh"
            price="99"
            progress={70}
            image="https://via.placeholder.com/400x300"
            status="Active"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
