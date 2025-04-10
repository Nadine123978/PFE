import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
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
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
