import React from 'react';
import { Box, Card, CardContent, Typography, Chip, Divider, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const seatCategories = [
  { label: 'Diamond', price: '$120', color: '#e67ecf', type: 'Seating' },
  { label: 'Platinum', price: '$100', color: '#b588f7', type: 'Seating' },
  { label: 'Gold', price: '$85', color: '#ffcf7f', type: 'Seating' },
  { label: 'Silver', price: '$70', color: '#b8c5e0', type: 'Seating' },
  { label: 'Bronze', price: '$60', color: '#dac9d2', type: 'Seating' },
  { label: 'General Admission', price: '$50', color: '#fbe191', type: 'Standing' },
  { label: 'Backstage Access', price: '$200', color: '#f2a35b', type: 'Standing' },
  { label: 'VIP Lounge', price: '$150', color: '#e17cd6', type: 'Seating' },
];

const ticketBenefits = {
  'VIP Lounge': {
    price: '$150',
    benefits: ['Premium seating', 'Complimentary drinks', 'Fast-track entry'],
  },
  'Backstage Access': {
    price: '$200',
    benefits: ['Standing access to the backstage area', 'Artist meet & greet', 'Exclusive merchandise'],
  },
};

export default function SeatPlan() {
  return (
    <Card sx={{ borderRadius: 4, p: 3 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>Seat Plan</Typography>

      {/* Seat Map + Legend */}
      <Box display="flex" gap={3} flexWrap="wrap">
        <Box flex="1 1 250px">
          <img
            src="https://i.imgur.com/o9Uq13y.png" // أو ضع رابط الصورة من عندك
            alt="Seat Map"
            style={{ width: '100%', borderRadius: 12 }}
          />
        </Box>
        <Box flex="1 1 250px">
          {seatCategories.map((cat) => (
            <Box key={cat.label} display="flex" alignItems="center" justifyContent="space-between" mb={1}>
              <Box display="flex" alignItems="center" gap={1}>
                <Box sx={{ width: 12, height: 12, backgroundColor: cat.color, borderRadius: 0.5 }} />
                <Typography variant="body2">{cat.label} ({cat.type})</Typography>
              </Box>
              <Typography variant="body2" fontWeight="bold" color="primary">{cat.price}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Notes */}
      <Box mt={3}>
        <Typography variant="subtitle2" fontWeight="bold" gutterBottom>Notes</Typography>
        <Typography variant="body2">• Seating categories include reserved seating with an unobstructed stage view.</Typography>
        <Typography variant="body2">• Standing categories include access to open floor areas near the stage.</Typography>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* Ticket Category Benefits */}
      <Typography variant="subtitle2" fontWeight="bold" gutterBottom>Ticket Category Benefits</Typography>
      <Grid container spacing={3}>
        {Object.entries(ticketBenefits).map(([category, info]) => (
          <Grid item xs={12} md={6} key={category}>
            <Card sx={{ borderRadius: 2, p: 2, backgroundColor: '#fafafa' }}>
              <Typography variant="subtitle1" fontWeight="bold">{category}</Typography>
              <List dense>
                {info.benefits.map((benefit, idx) => (
                  <ListItem key={idx} sx={{ py: 0 }}>
                    <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary={benefit} primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                ))}
              </List>
              <Typography variant="h6" color="primary" fontWeight="bold" mt={1}>{info.price}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}
