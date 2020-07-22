import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import './App.css';

import Topbar from './Topbar';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export default function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{height: "100vh"}}>
        <Topbar/>
      </Paper>
    </ThemeProvider>
  );
}

//  LocalWords:  Topbar
