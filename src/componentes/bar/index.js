import React from 'react';

import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';

import './styles.css';

function Bar() {
    return (
        <AppBar id="appBar" position='static'>
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div" style={{color: "#000000"}}>
                    React Maps
                </Typography>
                <IconButton edge="start" style={{color: "#000000"}} color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <Search />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Bar;