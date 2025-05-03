import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Tabs,
  Tab,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  LinearProgress,
} from "@mui/material";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "../../components/Header";

const Booking = () => {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, ml: "250px", width: "calc(100vw - 250px)" }}
    >
      <Header title="Gallery" subtitle="Dashboard / Gallery" />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Total Bookings
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                55,000
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Total Tickets Sold
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                45,000
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Total Earnings
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                $275,450
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Bookings Category + Chart */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Bookings Category
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography variant="body2">Music</Typography>
                <Typography variant="body2">14,172</Typography>
              </Box>
              <LinearProgress variant="determinate" value={80} sx={{ mb: 2 }} />
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography variant="body2">Sport</Typography>
                <Typography variant="body2">12,476</Typography>
              </Box>
              <LinearProgress variant="determinate" value={70} sx={{ mb: 2 }} />
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography variant="body2">Fashion</Typography>
                <Typography variant="body2">9,806</Typography>
              </Box>
              <LinearProgress variant="determinate" value={50} sx={{ mb: 2 }} />
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography variant="body2">Art & Design</Typography>
                <Typography variant="body2">7,661</Typography>
              </Box>
              <LinearProgress variant="determinate" value={40} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Bookings Overview
              </Typography>
              <Box
                sx={{
                  height: "160px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "gray",
                }}
              >
                [Chart]
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Table Section */}
      <Box sx={{ mt: 4 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            </TabsList>
          </Tabs>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Input placeholder="Search name, event, etc" className="w-64" />
            <Button variant="outlined">
              <Search size={18} />
            </Button>
          </Box>
        </Box>

        <Card>
          <CardContent>
            <Table>
            <TableHead>
  <TableRow>
    <TableCell><strong>Invoice ID</strong></TableCell>
    <TableCell><strong>Date</strong></TableCell>
    <TableCell><strong>Name</strong></TableCell>
    <TableCell><strong>Event</strong></TableCell>
    <TableCell><strong>Price</strong></TableCell>
    <TableCell><strong>Qty</strong></TableCell>
    <TableCell><strong>Amount</strong></TableCell>
    <TableCell><strong>Status</strong></TableCell>
  </TableRow>
</TableHead>

              <TableBody>
                <TableRow>
                  <TableCell>INV1001</TableCell>
                  <TableCell>2029/02/15</TableCell>
                  <TableCell>Jackson Moore</TableCell>
                  <TableCell>Symphony Under the Stars</TableCell>
                  <TableCell>$50</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>$100</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        backgroundColor: "green",
                        color: "white",
                        borderRadius: "5px",
                        px: 1,
                        py: 0.5,
                        fontSize: "12px",
                        display: "inline-block",
                      }}
                    >
                      Confirmed
                    </Box>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Box sx={{ pt: 2, display: "flex", justifyContent: "center" }}>
              <Pagination count={10} />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Booking;
