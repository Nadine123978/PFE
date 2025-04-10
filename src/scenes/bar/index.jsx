import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import Gallery from "../../components/Gallery";

const Bar = () => {
  return (
    <Box
    component="main"
    sx={{
      flexGrow: 1,
      p: 3,
      marginLeft: "250px",
       width: "calc(100% - 250px)"
        
    }}
  >
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <Gallery />
      </Box>
    </Box>
  );
};

export default Bar;
