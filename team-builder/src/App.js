import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import './App.css';

import Topbar from './Topbar';
import MembersDisplay from './MembersDisplay';

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

  function deleteMember(memberToDelete) {
    setTeamMembers(teamMembers.filter(
      member => member.id !== memberToDelete.id));
  }

  function updateMember(updatedMember) {
    setTeamMembers(teamMembers.map(
      member => updatedMember.id === member.id ? updatedMember : member));
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{height: "100vh"}}>
        <Topbar addTeamMember={addTeamMember}/>
        <MembersDisplay deleteMember={deleteMember}
                        teamMembers={teamMembers}
                        updateMember={updateMember}/>
      </Paper>
    </ThemeProvider>
  );
}

//  LocalWords:  Topbar MembersDisplay
