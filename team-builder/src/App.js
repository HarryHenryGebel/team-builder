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
  const [teamMembers, setTeamMembers] = useState([]);

  function addTeamMember(newMember) {
    setTeamMembers([...teamMembers, newMember]);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{height: "100vh"}}>
        <Topbar addTeamMember={addTeamMember}/>
      </Paper>
    </ThemeProvider>
  );
}

//  LocalWords:  Topbar
