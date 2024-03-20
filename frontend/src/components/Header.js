import React from 'react';
import { AppBar, Toolbar, Typography, Button, TextField, Box, Grid } from '@mui/material';

const Header = () => {
  // Add any necessary functions here. For example, handling search:
  const handleSearch = (event) => {
    // Logic to handle search
    console.log(event.target.value);
  };

  return (
    <Grid container spacing={2}>
        <Grid item xs={0} md={3}>
        </Grid>
        <Grid item xs={12} md={6}>
            <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Toolbar sx={{ flexWrap: 'wrap', borderBottom: 1, borderColor: 'divider' }}>
                <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                boltsDB
                </Typography>
            </Toolbar>
            <Toolbar component="nav" variant="regular" sx={{ justifyContent: 'space-between', overflowX: 'auto' }}>
                <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <Button href="/" sx={{ my: 1, mx: 1.5 }}>
                    Home
                </Button>
                <Button href="/browse" sx={{ my: 1, mx: 1.5 }}>
                    Browse
                </Button>
                <Button href="#" sx={{ my: 1, mx: 1.5 }}>
                    About
                </Button>
                </Box>
                <TextField
                label="Search"
                variant="outlined"
                size="small"
                onChange={handleSearch}
                sx={{ mr: 2 }}
                />
            </Toolbar>
            </AppBar>
        </Grid>
        <Grid item xs={0} md={3}>
        </Grid>
    </Grid>
  );
};

export default Header;
