import React from 'react';

import { AppBar, Toolbar, IconButton, Typography, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';

import './styles.css';

function Bar() {
    return (
        <AppBar id="appBar" position='static'>
            <Toolbar id="toolBar" variant="dense">
                <Typography variant="h6" color="inherit" component="div" style={{ color: "#656A6A", fontWeight: "bold" }}>
                    React Maps
                </Typography>

                <div id="searchBar">
                    <TextField id="searchText" label="Search" />
                </div>
                <IconButton edge="start" style={{ color: "#656A6A" }} color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <Search />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Bar;