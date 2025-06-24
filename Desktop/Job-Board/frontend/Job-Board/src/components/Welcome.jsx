import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const Welcome = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url('/Images/bg.png')`,
        backgroundSize: 'fit',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          width: 400,
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(4px)',
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to Job Portal
        </Typography>
        <Typography variant="subtitle1">
          Find your dream job or the perfect candidate with ease.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Welcome;
