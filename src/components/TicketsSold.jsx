import { Box, Typography } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const TicketsSold = () => {
  // البيانات الخاصة بالرسم البياني
  const data = [
    { name: "Sold Out", value: 1251, color: "#F36BF9" },
    { name: "Fully Booked", value: 834, color: "#37437D" },
    { name: "Available", value: 695, color: "#DCDEED" },
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
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "300px",
        margin: "10px auto",
      }}
    >
      {/* العنوان */}
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}
      >
        Tickets Sold
      </Typography>

      {/* الرسم البياني الدائري */}
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>

      {/* النصوص الخاصة بالتفاصيل */}
      <Box mt="20px" textAlign="center">
        <Typography variant="subtitle2" color="gray">
          Total Tickets
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: "#37437D", fontWeight: "700", marginTop: "5px" }}
        >
          2,780
        </Typography>
      </Box>
    </Box>
  );
};

export default TicketsSold;
