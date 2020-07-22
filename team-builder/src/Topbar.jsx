import React, { useState } from 'react';
import { AppBar,
         IconButton,
         Toolbar,
         Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/AddCircleOutlineOutlined';

import EntryDialog from './EntryDialog';

export default function Topbar (props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false),
        {addTeamMember} = props;

  return(
    <AppBar>
          <Toolbar>
            <IconButton onClick={() => setIsDialogOpen(true)}>
              <AddIcon/>
            </IconButton>
            <EntryDialog isOpen={isDialogOpen}
                         setIsOpen={setIsDialogOpen}
                         addTeamMember={addTeamMember}/>
            <Typography variant="h6">Team Members</Typography>
          </Toolbar>
    </AppBar>
  );
}

//  LocalWords:  AddCircleOutlineOutlined EntryDialog
