import { Box, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SalesRevenue = () => {
  // بيانات الرسم البياني
  const data = [
    { month: "Jan", revenue: 2000 },
    { month: "Feb", revenue: 3200 },
    { month: "Mar", revenue: 4800 },
    { month: "Apr", revenue: 6200 },
    { month: "May", revenue: 7800 },
    { month: "Jun", revenue: 9500 },
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      p="20px"
      borderRadius="12px"
      sx={{
        backgroundColor: "#f4f4f4",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "700px",
        margin: "10px auto",
      }}
    >
      {/* العنوان */}
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginBottom: "15px", textAlign: "center" }}
      >
        Sales Revenue
      </Typography>

      {/* الرسم البياني */}
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#8884d8" />
          <YAxis stroke="#8884d8" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#42a5f5"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* إحصائيات الإيرادات */}
      <Box mt="15px" textAlign="center">
        <Typography variant="subtitle2" color="gray">
          Total Revenue
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: "#42a5f5", fontWeight: "700", marginTop: "5px" }}
        >
          $9,500
        </Typography>
      </Box>
    </Box>
  );
};

export default SalesRevenue;
