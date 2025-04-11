import React from 'react';
import { Card, Typography, Grid, Box } from '@mui/material';

const products = [
  {
    name: 'Echo Beats Cap',
    price: 'USD $20',
    image: 'https://i.imgur.com/czZptmi.png', // استبدل بالرابط الفعلي للقبعة
  },
  {
    name: 'Festival T-Shirt',
    price: 'USD $25',
    image: 'https://i.imgur.com/H7BPyoO.png', // استبدل بالرابط الفعلي للقميص
  },
  {
    name: 'Light-Up Wristband',
    price: 'USD $15',
    image: 'https://i.imgur.com/zKQ0i7O.png', // استبدل بالرابط الفعلي للسوار
  },
];

export default function MerchandiseSection() {
  return (
    <Card sx={{ borderRadius: 4, p: 3 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Official Merchandise
      </Typography>

      <Grid container spacing={2}>
        {products.map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box
              sx={{
                backgroundColor: '#f8f7fc',
                borderRadius: 3,
                p: 2,
                textAlign: 'center',
                transition: '0.3s',
                '&:hover': { boxShadow: 3 },
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{ height: 120, objectFit: 'contain', mb: 2 }}
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
