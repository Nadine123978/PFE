import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

const merchandise = [
  {
    name: 'Echo Beats Cap',
    price: 'USD $20',
    image: 'https://i.imgur.com/T6J6UqF.png', // استبدل بالرابط المناسب للقبعة
  },
  {
    name: 'Festival T-Shirt',
    price: 'USD $25',
    image: 'https://i.imgur.com/5R4h7hj.png', // استبدل بالرابط المناسب للقميص
  },
  {
    name: 'Light-Up Wristband',
    price: 'USD $15',
    image: 'https://i.imgur.com/0Rs0Qk2.png', // استبدل بالرابط المناسب للسوار
  },
];

export default function OfficialMerchandise() {
  return (
    <Card sx={{ borderRadius: 4, p: 3 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Official Merchandise
      </Typography>
      <Grid container spacing={2}>
        {merchandise.map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box
              sx={{
                backgroundColor: '#f5f5fc',
                borderRadius: 3,
                p: 2,
                textAlign: 'center',
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{ height: 120, mb: 1, objectFit: 'contain' }}
              />
              <Typography variant="subtitle1">{item.name}</Typography>
              <Typography variant="body2" color="primary" fontWeight="bold">
                {item.price}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}
6