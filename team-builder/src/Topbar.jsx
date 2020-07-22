import React from 'react';
import { AppBar,
         IconButton,
         Toolbar,
         Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/AddCircleOutlineOutlined';

export default function Topbar () {
  return(
    <AppBar>
          <Toolbar>
            <IconButton aria-label="add">
              <AddIcon/>
            </IconButton>
            <Typography variant="h6">Team Members</Typography>
          </Toolbar>
    </AppBar>
  );
}

//  LocalWords:  AddCircleOutlineOutlined
