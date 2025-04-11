import React from 'react';
import { Card, Typography, Box, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const packages = [
  { name: 'General Admission Package', type: 'Standing', benefit: 'Access to Festival Grounds', price: '$50' },
  { name: 'Silver Package', type: 'Seating', benefit: 'Mid-tier View', price: '$70' },
  { name: 'Gold Package', type: 'Seating', benefit: 'Prime View', price: '$85' },
  { name: 'Platinum Package', type: 'Seating', benefit: 'Near Stage', price: '$100' },
  { name: 'Diamond Package', type: 'Seating', benefit: 'Front-Row View', price: '$120' },
  { name: 'VIP Lounge Package', type: 'Seating', benefit: 'Exclusive Lounge', price: '$150' },
  { name: 'Artist Meet-and-Greet Package', type: 'Standing', benefit: 'Backstage Access', price: '$180' },
  { name: 'Ultimate Access Package', type: 'Standing', benefit: 'All-Inclusive Benefits', price: '$200' },
];

export default function PackagesList() {
  return (
    <Card sx={{ borderRadius: 4, p: 3 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Packages
      </Typography>

      <List>
        {packages.map((pkg, index) => (
          <ListItem
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              borderBottom: '1px solid #f0f0f0',
              pb: 1,
              mb: 1,
            }}
          >
            <Box>
              <Typography variant="subtitle1" fontWeight="medium">
                {pkg.name}
              </Typography>
              <Box display="flex" alignItems="center" gap={1} color="text.secondary">
                <RadioButtonUncheckedIcon sx={{ fontSize: 14 }} />
                <Typography variant="body2">{pkg.type}</Typography>
                <Typography variant="body2">· {pkg.benefit}</Typography>
              </Box>
            </Box>
            <Typography variant="body1" color="primary" fontWeight="bold">
              {pkg.price}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
