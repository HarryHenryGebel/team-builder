import React, { useState } from 'react';
import { Button,
         Dialog,
         DialogActions,
         DialogContent,
         DialogTitle,
         Divider,
         FormControl,
         InputLabel,
         MenuItem,
         Select,
         TextField } from '@material-ui/core';

import TeamMember from './TeamMember';

const roles =['Lead', 'Designer', 'Front End', 'Back End'];

export default function EntryDialog (props) {
  const {addTeamMember,
         isEdit,
         isOpen,
         member,
         setIsOpen,
         updateMember} = props,
        emptyValue = {name: '', email: '', role: ''},
        [entryValue, setEntryValue] = useState(emptyValue);

  function onClose() {
    setIsOpen(false);
    setEntryValue(emptyValue);
  }

  function processInput(field, event) {
    setEntryValue({...entryValue, [field]: event.target.value});
  }

  function submit() {
    if (isEdit)
      updateMember(entryValue);
    else
      addTeamMember(new TeamMember(entryValue.name,
                                   entryValue.email,
                                   entryValue.role));
    onClose();
  }

  // Prevent setting member when dialog is closed, prevent infinite loop
  if (isEdit && isOpen && entryValue.id === undefined) {
    setEntryValue({...member});
  }

  return (
    <Dialog open={isOpen} onClose={onClose} >
      <DialogTitle>{isEdit ? 'Edit Member' : 'Create Member'}</DialogTitle>
      <DialogContent>
        <TextField autoFocus
                   label='Member name'
                   margin='normal'
                   onChange={(event) => processInput('name', event)}
                   required
                   value={entryValue.name}/>
        <Divider orientation='vertical' flexItem />
        <TextField label='Email address'
                   margin='normal'
                   onChange={(event) => processInput('email', event)}
                   required
                   type='email'
                   value={entryValue.email}/>
        <Divider orientation='vertical' flexItem />
        <FormControl fullWidth>
          <InputLabel id='entry-dialog-select' required>Role</InputLabel>
          <Select id='entry-dialog'
                  labelId='entry-dialog-select'
                  onChange={(event) => processInput('role', event)}
                  value={entryValue.role}>
            {roles.map((role) => <MenuItem key={role}
                                           value={role}>
                                   {role}
                                 </MenuItem>)}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={submit} >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

//  LocalWords:  TeamMember
