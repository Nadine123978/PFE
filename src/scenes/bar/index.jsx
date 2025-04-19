import { Box } from "@mui/material";
import Header from "../../components/Header";
import Gallery from "../../components/Gallery";

const Bar = () => {
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
      <Header title="Gallery" subtitle="Dashboard / Gallery" />
      <Box height="75vh">
        <Gallery />
      </Box>
    </Box>
  );
};

export default Bar;
